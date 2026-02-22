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


// ═══════════════════════════════════════════════════════════════════════════
// ▼▼▼  NEW EXPORTS — SHADI BAZAR GUEST MANAGER (Dashboard App)  ▼▼▼
// Nothing above this line was changed.
//
// These 5 new exports serve the Shadi Bazar standalone Guest Manager page.
// They use the SAME wedding_guests table with the same extra columns.
//
// ── ADDITIONAL ONE-TIME MIGRATION (add only if not already run above) ───────
//
//   ALTER TABLE wedding_guests
//     ADD COLUMN IF NOT EXISTS meal          ENUM('Veg','Non-Veg','Vegan','Kids','Custom') DEFAULT NULL,
//     ADD COLUMN IF NOT EXISTS diet          VARCHAR(255) DEFAULT NULL,
//     ADD COLUMN IF NOT EXISTS count         INT          DEFAULT 1,
//     ADD COLUMN IF NOT EXISTS plus_one      TINYINT(1)   DEFAULT 0,
//     ADD COLUMN IF NOT EXISTS date_responded DATE        DEFAULT NULL;
//
// ═══════════════════════════════════════════════════════════════════════════

/** Convert a DB row → shape expected by the Shadi Bazar Guest Manager UI */
const rowToShadiBazarGuest = (row) => ({
  id:      row.id,
  name:    row.name    || '',
  side:    row.side    || 'Groom',
  phone:   row.phone   || row.contact || '',
  email:   row.email   || '',
  // rsvp_status (new column) takes priority; fall back to old rsvp column
  status:  row.rsvp_status || row.rsvp || 'Pending',
  count:   row.count   ?? row.invited_count ?? 1,
  plusOne: Boolean(row.plus_one ?? row.plus_one_allowed),
  date:    row.date_responded
    ? new Date(row.date_responded).toISOString().split('T')[0]
    : '',
  meal:    row.meal || row.dietary_preference || '',
  diet:    row.diet || row.dietary_notes      || '',
});

// ─────────────────────────────────────────────────────────
// GET /api/wedding/guests/shadi-bazar/stats
// Aggregated stats for the Shadi Bazar dashboard
// Must be declared BEFORE shadi-bazar/:id routes
// ─────────────────────────────────────────────────────────
exports.getShadiBazarStats = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [rows] = await db.query(
      'SELECT * FROM wedding_guests WHERE wedding_id = ?',
      [weddingId]
    );

    const guests         = rows.map(rowToShadiBazarGuest);
    const totalInvited   = guests.length;
    const confirmed      = guests.filter(g => g.status === 'Confirmed');
    const totalConfirmed = confirmed.reduce((acc, g) => acc + (g.count || 0), 0);
    const totalDeclined  = guests.filter(g => g.status === 'Not Coming').length;
    const pending        = guests.filter(g => g.status === 'Pending').length;
    const responded      = guests.filter(g => g.status !== 'Pending').length;
    const responseRate   = totalInvited > 0
      ? Math.round((responded / totalInvited) * 100)
      : 0;

    const meals = { Veg: 0, 'Non-Veg': 0, Vegan: 0, Kids: 0, Custom: 0 };
    confirmed.forEach(g => {
      if (g.meal && meals[g.meal] !== undefined) {
        meals[g.meal] += (g.count || 1);
      }
    });

    res.json({
      success: true,
      data: { totalInvited, totalConfirmed, totalDeclined, pending, responseRate, meals },
    });
  } catch (err) {
    console.error('getShadiBazarStats error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// GET /api/wedding/guests/shadi-bazar
// Returns all guests in Shadi Bazar shape
// ─────────────────────────────────────────────────────────
exports.getShadiBazarGuests = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [rows] = await db.query(
      'SELECT * FROM wedding_guests WHERE wedding_id = ? ORDER BY id ASC',
      [weddingId]
    );

    res.json({ success: true, data: rows.map(rowToShadiBazarGuest) });
  } catch (err) {
    console.error('getShadiBazarGuests error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/wedding/guests/shadi-bazar
// Add guest in Shadi Bazar shape
// ─────────────────────────────────────────────────────────
exports.addShadiBazarGuest = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId)
      return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const {
      name, side = 'Groom', phone = '', email = '',
      status = 'Pending', count = 1, plusOne = false,
      date = null, meal = null, diet = null,
    } = req.body;

    if (!name || !name.trim())
      return res.status(400).json({ success: false, message: 'Guest name is required' });

    const [result] = await db.query(
      `INSERT INTO wedding_guests
         (wedding_id, name, contact, email, side,
          phone, rsvp_status, count, plus_one,
          date_responded, meal, diet,
          invited_count, plus_one_allowed)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        weddingId, name.trim(),
        phone,          // contact = phone (keeps old page happy)
        email, side,
        phone, status, count, plusOne ? 1 : 0,
        date || null, meal || null, diet || null,
        count,          // keep invited_count in sync
        plusOne ? 1 : 0 // keep plus_one_allowed in sync
      ]
    );

    const [rows] = await db.query('SELECT * FROM wedding_guests WHERE id = ?', [result.insertId]);
    res.status(201).json({ success: true, data: rowToShadiBazarGuest(rows[0]) });
  } catch (err) {
    console.error('addShadiBazarGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// PUT /api/wedding/guests/shadi-bazar/:id
// Full update in Shadi Bazar shape
// ─────────────────────────────────────────────────────────
exports.updateShadiBazarGuest = async (req, res) => {
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

    const name    = body.name    ?? row.name;
    const side    = body.side    ?? row.side;
    const phone   = body.phone   ?? row.phone   ?? row.contact ?? '';
    const email   = body.email   ?? row.email   ?? '';
    const status  = body.status  ?? row.rsvp_status ?? row.rsvp ?? 'Pending';
    const count   = body.count   ?? row.count   ?? row.invited_count ?? 1;
    const plusOne = body.plusOne !== undefined
      ? (body.plusOne ? 1 : 0)
      : (row.plus_one ?? row.plus_one_allowed ?? 0);
    const date    = body.date    ?? row.date_responded ?? null;
    const meal    = body.meal    ?? row.meal    ?? null;
    const diet    = body.diet    ?? row.diet    ?? null;

    await db.query(
      `UPDATE wedding_guests SET
         name = ?, contact = ?, email = ?, side = ?,
         phone = ?, rsvp_status = ?, count = ?, plus_one = ?,
         date_responded = ?, meal = ?, diet = ?,
         invited_count = ?, plus_one_allowed = ?
       WHERE id = ? AND wedding_id = ?`,
      [
        name, phone, email, side,
        phone, status, count, plusOne,
        date || null, meal || null, diet || null,
        count, plusOne,
        req.params.id, weddingId,
      ]
    );

    const [updated] = await db.query('SELECT * FROM wedding_guests WHERE id = ?', [req.params.id]);
    res.json({ success: true, data: rowToShadiBazarGuest(updated[0]) });
  } catch (err) {
    console.error('updateShadiBazarGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// DELETE /api/wedding/guests/shadi-bazar/:id
// ─────────────────────────────────────────────────────────
exports.deleteShadiBazarGuest = async (req, res) => {
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
    console.error('deleteShadiBazarGuest error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};