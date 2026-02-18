// controllers/weddingController.js
const db = require('../config/weddingToolsDb');

// ─────────────────────────────────────────────────────────
// Helper: get or create the wedding row for this user
// ─────────────────────────────────────────────────────────
const getOrCreateWedding = async (userId) => {
  const [rows] = await db.query('SELECT * FROM weddings WHERE user_id = ?', [userId]);
  if (rows.length > 0) return rows[0];

  const [result] = await db.query(
    'INSERT INTO weddings (user_id) VALUES (?)',
    [userId]
  );
  const [newRows] = await db.query('SELECT * FROM weddings WHERE id = ?', [result.insertId]);
  return newRows[0];
};

// ─────────────────────────────────────────────────────────
// GET  /api/wedding/setup
// ─────────────────────────────────────────────────────────
exports.getSetup = async (req, res) => {
  try {
    const wedding = await getOrCreateWedding(req.user.id);

    const [events] = await db.query(
      'SELECT * FROM wedding_events WHERE wedding_id = ? ORDER BY id ASC',
      [wedding.id]
    );

    res.json({
      success: true,
      data: { ...wedding, events },
    });
  } catch (err) {
    console.error('getSetup error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// PUT  /api/wedding/setup
// Body: { bride, groom, date, venue, theme }
// ─────────────────────────────────────────────────────────
exports.updateSetup = async (req, res) => {
  try {
    const { bride, groom, date, venue, theme } = req.body;
    const wedding = await getOrCreateWedding(req.user.id);

    await db.query(
      `UPDATE weddings
         SET bride = ?, groom = ?, wedding_date = ?, venue = ?, theme = ?
       WHERE id = ?`,
      [bride || null, groom || null, date || null, venue || null, theme || null, wedding.id]
    );

    res.json({ success: true, message: 'Wedding details updated' });
  } catch (err) {
    console.error('updateSetup error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// POST /api/wedding/events
// Body: { name }
// ─────────────────────────────────────────────────────────
exports.addEvent = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success: false, message: 'Event name required' });

    const wedding = await getOrCreateWedding(req.user.id);

    const [result] = await db.query(
      'INSERT INTO wedding_events (wedding_id, name) VALUES (?, ?)',
      [wedding.id, name]
    );

    res.status(201).json({
      success: true,
      data: { id: result.insertId, wedding_id: wedding.id, name },
    });
  } catch (err) {
    console.error('addEvent error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ─────────────────────────────────────────────────────────
// DELETE /api/wedding/events/:id
// ─────────────────────────────────────────────────────────
exports.deleteEvent = async (req, res) => {
  try {
    const wedding = await getOrCreateWedding(req.user.id);
    const { id } = req.params;

    const [result] = await db.query(
      'DELETE FROM wedding_events WHERE id = ? AND wedding_id = ?',
      [id, wedding.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    res.json({ success: true, message: 'Event deleted' });
  } catch (err) {
    console.error('deleteEvent error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};