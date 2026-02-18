// controllers/guestController.js
const db = require('../config/weddingToolsDb');

// helper – get wedding id for authenticated user
const getWeddingId = async (userId) => {
  const [rows] = await db.query('SELECT id FROM weddings WHERE user_id = ?', [userId]);
  if (rows.length === 0) return null;
  return rows[0].id;
};

// ─────────────────────────────────────────────────────────
// GET /api/wedding/guests?side=Bride|Groom
// ─────────────────────────────────────────────────────────
exports.getGuests = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const { side } = req.query;
    let query = 'SELECT * FROM wedding_guests WHERE wedding_id = ?';
    const params = [weddingId];

    if (side && ['Bride', 'Groom'].includes(side)) {
      query += ' AND side = ?';
      params.push(side);
    }

    query += ' ORDER BY id ASC';
    const [guests] = await db.query(query, params);

    res.json({ success: true, data: guests });
  } catch (err) {
    console.error('getGuests error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/wedding/guests
// Body: { name, contact, email, side }
// ─────────────────────────────────────────────────────────
exports.addGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const { name, contact, email, side } = req.body;
    if (!name) return res.status(400).json({ success: false, message: 'Guest name is required' });

    const [result] = await db.query(
      `INSERT INTO wedding_guests (wedding_id, name, contact, email, side)
       VALUES (?, ?, ?, ?, ?)`,
      [weddingId, name, contact || null, email || null, side || 'Bride']
    );

    const [rows] = await db.query('SELECT * FROM wedding_guests WHERE id = ?', [result.insertId]);
    res.status(201).json({ success: true, data: rows[0] });
  } catch (err) {
    console.error('addGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// PATCH /api/wedding/guests/:id/rsvp
// Body: { rsvp: 'Confirmed' | 'Pending' | 'Not Coming' }
// ─────────────────────────────────────────────────────────
exports.updateRsvp = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const { rsvp } = req.body;
    const validRsvp = ['Pending', 'Confirmed', 'Not Coming'];
    if (!validRsvp.includes(rsvp)) {
      return res.status(400).json({ success: false, message: 'Invalid RSVP value' });
    }

    const [result] = await db.query(
      'UPDATE wedding_guests SET rsvp = ? WHERE id = ? AND wedding_id = ?',
      [rsvp, req.params.id, weddingId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Guest not found' });
    }

    res.json({ success: true, message: 'RSVP updated' });
  } catch (err) {
    console.error('updateRsvp error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// DELETE /api/wedding/guests/:id
// ─────────────────────────────────────────────────────────
exports.deleteGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [result] = await db.query(
      'DELETE FROM wedding_guests WHERE id = ? AND wedding_id = ?',
      [req.params.id, weddingId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Guest not found' });
    }

    res.json({ success: true, message: 'Guest deleted' });
  } catch (err) {
    console.error('deleteGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


// ═══════════════════════════════════════════════════════════════════════════
// ▼▼▼  NEW EXPORTS — GUEST MANAGEMENT APP  ▼▼▼
// Nothing above this line was changed.
//
// These 4 new exports serve the GuestManagementApp page.
// They share the same wedding_guests table but use extra columns.
//
// ── ONE-TIME MIGRATION (run once in your MySQL client) ──────────────────────
//
//   ALTER TABLE wedding_guests
//     ADD COLUMN IF NOT EXISTS phone                VARCHAR(50)   DEFAULT '',
//     ADD COLUMN IF NOT EXISTS invited_count        INT           DEFAULT 1,
//     ADD COLUMN IF NOT EXISTS plus_one_allowed     TINYINT(1)    DEFAULT 0,
//     ADD COLUMN IF NOT EXISTS rsvp_status          ENUM('Pending','Confirmed','Not Coming') DEFAULT 'Pending',
//     ADD COLUMN IF NOT EXISTS dietary_preference   ENUM('Veg','Non-Veg','Vegan','Custom')   DEFAULT 'Veg',
//     ADD COLUMN IF NOT EXISTS dietary_allergies    VARCHAR(255)  DEFAULT '',
//     ADD COLUMN IF NOT EXISTS dietary_notes        TEXT          DEFAULT '',
//     ADD COLUMN IF NOT EXISTS notes                TEXT          DEFAULT '',
//     ADD COLUMN IF NOT EXISTS invitation_sent      TINYINT(1)    DEFAULT 0,
//     ADD COLUMN IF NOT EXISTS invitation_sent_date DATE          DEFAULT NULL,
//     ADD COLUMN IF NOT EXISTS invitation_link      VARCHAR(500)  DEFAULT NULL;
//
// ═══════════════════════════════════════════════════════════════════════════

/** Convert a DB row → shape expected by GuestManagementApp */
const rowToAppGuest = (row) => ({
  id:             String(row.id),
  name:           row.name            || '',
  email:          row.email           || '',
  phone:          row.phone           || row.contact || '',
  side:           row.side            || 'Bride',
  invitedCount:   row.invited_count   || 1,
  plusOneAllowed: Boolean(row.plus_one_allowed),
  // rsvp_status (new column) takes priority; fall back to old rsvp column
  rsvpStatus:     row.rsvp_status     || row.rsvp || 'Pending',
  dietary: {
    preference: row.dietary_preference || 'Veg',
    allergies:  row.dietary_allergies  || '',
    notes:      row.dietary_notes      || '',
  },
  notes: row.notes || '',
  invitation: row.invitation_sent
    ? {
        sent:     true,
        sentDate: row.invitation_sent_date
          ? new Date(row.invitation_sent_date).toISOString().split('T')[0]
          : null,
        link: row.invitation_link || null,
      }
    : undefined,
});

// ─────────────────────────────────────────────────────────
// GET /api/wedding/guests/manage
// Returns all guests formatted for GuestManagementApp
// ─────────────────────────────────────────────────────────
exports.getManagedGuests = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [rows] = await db.query(
      'SELECT * FROM wedding_guests WHERE wedding_id = ? ORDER BY id ASC',
      [weddingId]
    );

    res.json({ success: true, data: rows.map(rowToAppGuest) });
  } catch (err) {
    console.error('getManagedGuests error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/wedding/guests/manage
// Add a guest with full GuestManagementApp fields
// ─────────────────────────────────────────────────────────
exports.addManagedGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const {
      name, email = '', phone = '', side = 'Bride',
      invitedCount = 1, plusOneAllowed = false,
      rsvpStatus = 'Pending',
      dietary = {}, notes = '',
    } = req.body;

    if (!name || !name.trim())
      return res.status(400).json({ success: false, message: 'Guest name is required' });

    const { preference = 'Veg', allergies = '', notes: dNotes = '' } = dietary;

    const [result] = await db.query(
      `INSERT INTO wedding_guests
         (wedding_id, name, contact, email, side,
          phone, invited_count, plus_one_allowed, rsvp_status,
          dietary_preference, dietary_allergies, dietary_notes, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        weddingId, name.trim(),
        phone,   // contact = phone (keeps old page happy)
        email, side,
        phone, invitedCount, plusOneAllowed ? 1 : 0, rsvpStatus,
        preference, allergies, dNotes, notes,
      ]
    );

    const [rows] = await db.query('SELECT * FROM wedding_guests WHERE id = ?', [result.insertId]);
    res.status(201).json({ success: true, data: rowToAppGuest(rows[0]) });
  } catch (err) {
    console.error('addManagedGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// PUT /api/wedding/guests/manage/:id
// Full update for GuestManagementApp (including invitation block)
// ─────────────────────────────────────────────────────────
exports.updateManagedGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [existing] = await db.query(
      'SELECT * FROM wedding_guests WHERE id = ? AND wedding_id = ?',
      [req.params.id, weddingId]
    );
    if (!existing.length)
      return res.status(404).json({ success: false, message: 'Guest not found' });

    const row  = existing[0];
    const body = req.body;

    const name           = body.name          ?? row.name;
    const email          = body.email         ?? row.email          ?? '';
    const phone          = body.phone         ?? row.phone          ?? row.contact ?? '';
    const side           = body.side          ?? row.side;
    const invitedCount   = body.invitedCount  ?? row.invited_count  ?? 1;
    const plusOneAllowed = body.plusOneAllowed !== undefined
      ? (body.plusOneAllowed ? 1 : 0)
      : (row.plus_one_allowed ?? 0);
    const rsvpStatus     = body.rsvpStatus    ?? row.rsvp_status    ?? row.rsvp ?? 'Pending';
    const notes          = body.notes         ?? row.notes          ?? '';

    const dietary    = body.dietary || {};
    const preference = dietary.preference ?? row.dietary_preference ?? 'Veg';
    const allergies  = dietary.allergies  ?? row.dietary_allergies  ?? '';
    const dNotes     = dietary.notes      ?? row.dietary_notes      ?? '';

    // Invitation block – sent by InvitationManager
    let invSent = row.invitation_sent      ?? 0;
    let invDate = row.invitation_sent_date ?? null;
    let invLink = row.invitation_link      ?? null;
    if (body.invitation) {
      invSent = body.invitation.sent     ? 1   : 0;
      invDate = body.invitation.sentDate || null;
      invLink = body.invitation.link     || null;
    }

    await db.query(
      `UPDATE wedding_guests SET
         name = ?, email = ?, contact = ?, phone = ?, side = ?,
         invited_count = ?, plus_one_allowed = ?, rsvp_status = ?,
         dietary_preference = ?, dietary_allergies = ?, dietary_notes = ?,
         notes = ?,
         invitation_sent = ?, invitation_sent_date = ?, invitation_link = ?
       WHERE id = ? AND wedding_id = ?`,
      [
        name, email, phone, phone, side,
        invitedCount, plusOneAllowed, rsvpStatus,
        preference, allergies, dNotes, notes,
        invSent, invDate, invLink,
        req.params.id, weddingId,
      ]
    );

    const [updated] = await db.query('SELECT * FROM wedding_guests WHERE id = ?', [req.params.id]);
    res.json({ success: true, data: rowToAppGuest(updated[0]) });
  } catch (err) {
    console.error('updateManagedGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// DELETE /api/wedding/guests/manage/:id
// Same delete logic as existing deleteGuest
// ─────────────────────────────────────────────────────────
exports.deleteManagedGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [result] = await db.query(
      'DELETE FROM wedding_guests WHERE id = ? AND wedding_id = ?',
      [req.params.id, weddingId]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ success: false, message: 'Guest not found' });

    res.json({ success: true, message: 'Guest deleted successfully' });
  } catch (err) {
    console.error('deleteManagedGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};