// controllers/weddingToolsController.js
// Handles Wedding Event (onboarding setup) CRUD

const db = require('../config/weddingToolsDb');

// GET /api/wedding-tools/event
// Get the authenticated user's wedding event details
const getWeddingEvent = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM wedding_events WHERE user_id = ?',
             [req.user.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No wedding event found. Please complete setup.'
            });
        }

        res.json({ success: true, data: rows[0] });
    } catch (error) {
        console.error('getWeddingEvent error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/event
// Create or update wedding event (upsert on user_id)
const upsertWeddingEvent = async (req, res) => {
    try {
        const { name, destination, guests, budget } = req.body;

        if (!name || !destination) {
            return res.status(400).json({
                success: false,
                message: 'Event name and destination are required.'
            });
        }

        // Upsert: insert new or update existing for this user
        const [result] = await db.query(
            `INSERT INTO wedding_events (user_id, name, destination, guests, budget)
             VALUES (?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE
               name = VALUES(name),
               destination = VALUES(destination),
               guests = VALUES(guests),
               budget = VALUES(budget),
               updated_at = CURRENT_TIMESTAMP`,
            [req.user.id, name, destination, guests || 0, budget || 0]
        );

        const [rows] = await db.query(
            'SELECT * FROM wedding_events WHERE user_id = ?',
            [req.user.id]
        );

        res.status(201).json({
            success: true,
            message: 'Wedding event saved successfully.',
            data: rows[0]
        });
    } catch (error) {
        console.error('upsertWeddingEvent error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getWeddingEvent, upsertWeddingEvent };