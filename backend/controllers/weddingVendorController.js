// controllers/weddingVendorController.js
const db = require('../config/weddingToolsDb');

const getWeddingId = async (userId) => {
  const [rows] = await db.query('SELECT id FROM weddings WHERE user_id = ?', [userId]);
  if (rows.length === 0) return null;
  return rows[0].id;
};

// ─────────────────────────────────────────────────────────
// GET /api/wedding/vendors
// ─────────────────────────────────────────────────────────
exports.getVendors = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [vendors] = await db.query(
      'SELECT * FROM wedding_vendors WHERE wedding_id = ? ORDER BY id ASC',
      [weddingId]
    );

    res.json({ success: true, data: vendors });
  } catch (err) {
    console.error('getVendors error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/wedding/vendors
// Body: { name, category, contact }
// ─────────────────────────────────────────────────────────
exports.addVendor = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const { name, category, contact } = req.body;
    if (!name) return res.status(400).json({ success: false, message: 'Vendor name is required' });

    const [result] = await db.query(
      `INSERT INTO wedding_vendors (wedding_id, name, category, contact)
       VALUES (?, ?, ?, ?)`,
      [weddingId, name, category || 'Caterer', contact || null]
    );

    const [rows] = await db.query('SELECT * FROM wedding_vendors WHERE id = ?', [result.insertId]);
    res.status(201).json({ success: true, data: rows[0] });
  } catch (err) {
    console.error('addVendor error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// PATCH /api/wedding/vendors/:id
// Body: { status?, rating? }
// ─────────────────────────────────────────────────────────
exports.updateVendor = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const { status, rating } = req.body;
    const fields = [];
    const values = [];

    if (status !== undefined) {
      if (!['Pending', 'Paid'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status' });
      }
      fields.push('status = ?');
      values.push(status);
    }

    if (rating !== undefined) {
      const r = parseInt(rating);
      if (r < 0 || r > 5) {
        return res.status(400).json({ success: false, message: 'Rating must be 0–5' });
      }
      fields.push('rating = ?');
      values.push(r);
    }

    if (fields.length === 0) {
      return res.status(400).json({ success: false, message: 'Nothing to update' });
    }

    values.push(req.params.id, weddingId);
    const [result] = await db.query(
      `UPDATE wedding_vendors SET ${fields.join(', ')} WHERE id = ? AND wedding_id = ?`,
      values
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Vendor not found' });
    }

    res.json({ success: true, message: 'Vendor updated' });
  } catch (err) {
    console.error('updateVendor error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// DELETE /api/wedding/vendors/:id
// ─────────────────────────────────────────────────────────
exports.deleteVendor = async (req, res) => {
  try {
    const weddingId = await getWeddingId(req.user.id);
    if (!weddingId) return res.status(404).json({ success: false, message: 'Wedding not set up yet' });

    const [result] = await db.query(
      'DELETE FROM wedding_vendors WHERE id = ? AND wedding_id = ?',
      [req.params.id, weddingId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Vendor not found' });
    }

    res.json({ success: true, message: 'Vendor deleted' });
  } catch (err) {
    console.error('deleteVendor error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};