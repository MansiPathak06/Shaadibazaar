// controllers/weddingWebsiteController.js
const db = require('../config/db');
const crypto = require('crypto');

// ─── helpers ──────────────────────────────────────────────────────────────────
const generateSlug = (coupleName) => {
  const base = (coupleName || 'our-wedding')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 40);
  const suffix = crypto.randomBytes(3).toString('hex'); // e.g. "a1b2c3"
  return `${base}-${suffix}`;
};

const generateToken = () => crypto.randomBytes(24).toString('hex');

// Safe JSON parse — returns fallback on error
const safeJson = (val, fallback = null) => {
  if (!val) return fallback;
  if (typeof val === 'object') return val;
  try { return JSON.parse(val); } catch { return fallback; }
};

// ─── CREATE ───────────────────────────────────────────────────────────────────
/**
 * POST /api/wedding-website
 * Body: all fields from the builder
 */
const createWeddingWebsite = async (req, res) => {
  try {
    const {
      user_id,
      couple_name,
      wedding_date,
      venue_name,
      venue_city,
      love_story,
      ceremony_time,
      reception_time,
      dress_code,
      rsvp_deadline,
      welcome_message,
      footer_note,
      extra_details,
      template_id,
      accent_color,
      secondary_color,
      font_heading,
      font_body,
      bg_color,
      text_dark_color,
      cover_photo,
      gallery_photos,    // array of base64 strings or URLs (max 20)
      rsvp_enabled,
    } = req.body;

    const slug = generateSlug(couple_name);
    const share_token = generateToken();

    // Limit gallery to 20 photos
    const photos = Array.isArray(gallery_photos)
      ? gallery_photos.slice(0, 20)
      : [];

    const [result] = await db.execute(
      `INSERT INTO wedding_websites
        (user_id, slug, share_token,
         couple_name, wedding_date, venue_name, venue_city,
         love_story, ceremony_time, reception_time, dress_code,
         rsvp_deadline, welcome_message, footer_note, extra_details,
         template_id, accent_color, secondary_color,
         font_heading, font_body, bg_color, text_dark_color,
         cover_photo, gallery_photos, rsvp_enabled)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        user_id || null,
        slug,
        share_token,
        couple_name || 'Our Wedding',
        wedding_date || null,
        venue_name || null,
        venue_city || null,
        love_story || null,
        ceremony_time || null,
        reception_time || null,
        dress_code || null,
        rsvp_deadline || null,
        welcome_message || null,
        footer_note || null,
        JSON.stringify(extra_details || []),
        template_id ?? 0,
        accent_color || '#b5867a',
        secondary_color || '#e8d5cc',
        font_heading || 'Cormorant Garamond',
        font_body || 'Jost',
        bg_color || '#fffaf8',
        text_dark_color || '#3d2c2c',
        cover_photo || null,
        JSON.stringify(photos),
        rsvp_enabled !== undefined ? rsvp_enabled : 1,
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Wedding website created!',
      data: {
        id: result.insertId,
        slug,
        share_token,
        share_url: `${process.env.FRONTEND_URL}/wedding-website/${slug}`,
        token_url: `${process.env.FRONTEND_URL}/wedding-website/t/${share_token}`,
      },
    });
  } catch (err) {
    console.error('createWeddingWebsite error:', err);
    res.status(500).json({ success: false, message: 'Failed to create wedding website', error: err.message });
  }
};

// ─── UPDATE ───────────────────────────────────────────────────────────────────
/**
 * PUT /api/wedding-website/:id
 * Requires share_token in body for ownership verification (or use JWT middleware)
 */
const updateWeddingWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const { share_token, gallery_photos, extra_details, ...rest } = req.body;

    // Verify ownership via token
    const [rows] = await db.execute(
      'SELECT id FROM wedding_websites WHERE id = ? AND share_token = ?',
      [id, share_token]
    );
    if (!rows.length) {
      return res.status(403).json({ success: false, message: 'Unauthorized or not found' });
    }

    const photos = Array.isArray(gallery_photos) ? gallery_photos.slice(0, 20) : undefined;

    const fields = { ...rest };
    if (photos !== undefined) fields.gallery_photos = JSON.stringify(photos);
    if (extra_details !== undefined) fields.extra_details = JSON.stringify(extra_details);

    // Build dynamic SET clause
    const allowed = [
      'couple_name','wedding_date','venue_name','venue_city',
      'love_story','ceremony_time','reception_time','dress_code',
      'rsvp_deadline','welcome_message','footer_note','extra_details',
      'template_id','accent_color','secondary_color',
      'font_heading','font_body','bg_color','text_dark_color',
      'cover_photo','gallery_photos','rsvp_enabled','is_published',
    ];

    const setClauses = [];
    const values = [];
    for (const key of allowed) {
      if (fields[key] !== undefined) {
        setClauses.push(`${key} = ?`);
        values.push(fields[key]);
      }
    }

    if (!setClauses.length) {
      return res.status(400).json({ success: false, message: 'No valid fields to update' });
    }

    values.push(id);
    await db.execute(
      `UPDATE wedding_websites SET ${setClauses.join(', ')} WHERE id = ?`,
      values
    );

    res.json({ success: true, message: 'Wedding website updated!' });
  } catch (err) {
    console.error('updateWeddingWebsite error:', err);
    res.status(500).json({ success: false, message: 'Failed to update', error: err.message });
  }
};

// ─── GET BY SLUG ──────────────────────────────────────────────────────────────
/**
 * GET /api/wedding-website/slug/:slug
 * Public — increments view count
 */
const getWeddingWebsiteBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await db.execute(
      'SELECT * FROM wedding_websites WHERE slug = ? AND is_published = 1',
      [slug]
    );
    if (!rows.length) return res.status(404).json({ success: false, message: 'Website not found' });

    // Increment view count (fire-and-forget)
    db.execute('UPDATE wedding_websites SET view_count = view_count + 1 WHERE id = ?', [rows[0].id]);

    const site = normalizeRow(rows[0]);
    res.json({ success: true, data: site });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── GET BY TOKEN ─────────────────────────────────────────────────────────────
/**
 * GET /api/wedding-website/token/:token
 * Public — used for direct share link
 */
const getWeddingWebsiteByToken = async (req, res) => {
  try {
    const { token } = req.params;
    const [rows] = await db.execute(
      'SELECT * FROM wedding_websites WHERE share_token = ?',
      [token]
    );
    if (!rows.length) return res.status(404).json({ success: false, message: 'Website not found' });

    db.execute('UPDATE wedding_websites SET view_count = view_count + 1 WHERE id = ?', [rows[0].id]);

    res.json({ success: true, data: normalizeRow(rows[0]) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── GET BY USER ──────────────────────────────────────────────────────────────
/**
 * GET /api/wedding-website/user/:userId
 */
const getWebsitesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.execute(
      'SELECT id, slug, share_token, couple_name, wedding_date, template_id, view_count, is_published, created_at FROM wedding_websites WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── DELETE ───────────────────────────────────────────────────────────────────
/**
 * DELETE /api/wedding-website/:id
 */
const deleteWeddingWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const { share_token } = req.body;

    const [rows] = await db.execute(
      'SELECT id FROM wedding_websites WHERE id = ? AND share_token = ?',
      [id, share_token]
    );
    if (!rows.length) return res.status(403).json({ success: false, message: 'Unauthorized' });

    await db.execute('DELETE FROM wedding_websites WHERE id = ?', [id]);
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── RSVP SUBMIT ─────────────────────────────────────────────────────────────
/**
 * POST /api/wedding-website/:id/rsvp
 */
const submitRsvp = async (req, res) => {
  try {
    const { id } = req.params;
    const { guest_name, guest_email, guest_phone, attending, num_guests, meal_preference, message } = req.body;

    if (!guest_name) return res.status(400).json({ success: false, message: 'guest_name is required' });

    // Check rsvp_enabled
    const [rows] = await db.execute('SELECT rsvp_enabled FROM wedding_websites WHERE id = ?', [id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Website not found' });
    if (!rows[0].rsvp_enabled) return res.status(400).json({ success: false, message: 'RSVPs are closed' });

    await db.execute(
      'INSERT INTO wedding_rsvps (website_id, guest_name, guest_email, guest_phone, attending, num_guests, meal_preference, message) VALUES (?,?,?,?,?,?,?,?)',
      [id, guest_name, guest_email || null, guest_phone || null, attending || 'yes', num_guests || 1, meal_preference || null, message || null]
    );

    res.status(201).json({ success: true, message: 'RSVP submitted!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── GET RSVPs (owner only) ───────────────────────────────────────────────────
/**
 * GET /api/wedding-website/:id/rsvps?token=xxx
 */
const getRsvps = async (req, res) => {
  try {
    const { id } = req.params;
    const { token } = req.query;

    const [owns] = await db.execute(
      'SELECT id FROM wedding_websites WHERE id = ? AND share_token = ?',
      [id, token]
    );
    if (!owns.length) return res.status(403).json({ success: false, message: 'Unauthorized' });

    const [rsvps] = await db.execute(
      'SELECT * FROM wedding_rsvps WHERE website_id = ? ORDER BY submitted_at DESC',
      [id]
    );

    const summary = {
      total: rsvps.length,
      attending: rsvps.filter(r => r.attending === 'yes').length,
      not_attending: rsvps.filter(r => r.attending === 'no').length,
      maybe: rsvps.filter(r => r.attending === 'maybe').length,
      total_guests: rsvps.reduce((sum, r) => sum + (r.num_guests || 1), 0),
    };

    res.json({ success: true, summary, data: rsvps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── normalizer ───────────────────────────────────────────────────────────────
const normalizeRow = (row) => ({
  ...row,
  gallery_photos: safeJson(row.gallery_photos, []),
  extra_details: safeJson(row.extra_details, []),
});

// ─── EXPORTS ──────────────────────────────────────────────────────────────────
module.exports = {
  createWeddingWebsite,
  updateWeddingWebsite,
  getWeddingWebsiteBySlug,
  getWeddingWebsiteByToken,
  getWebsitesByUser,
  deleteWeddingWebsite,
  submitRsvp,
  getRsvps,
};