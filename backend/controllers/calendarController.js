const db = require('../config/weddingToolsDb');

// Initialize table
const initTable = async () => {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS calendar_events (
            id VARCHAR(36) PRIMARY KEY,
            user_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            start_time TIME NOT NULL,
            end_time TIME NOT NULL,
            location VARCHAR(500),
            description TEXT,
            assigned_to VARCHAR(100),
            category VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_user_id (user_id),
            INDEX idx_date (date)
        )
    `);
};

initTable().catch(console.error);

// GET all events for logged-in user
const getEvents = async (req, res) => {
    try {
        const userId = req.user.id;
        const [rows] = await db.execute(
            'SELECT * FROM calendar_events WHERE user_id = ? ORDER BY date ASC, start_time ASC',
            [userId]
        );

        // Map DB columns back to camelCase for frontend
        const events = rows.map(row => ({
            id: row.id,
            title: row.title,
            date: row.date instanceof Date ? row.date.toISOString().split('T')[0] : row.date,
            startTime: row.start_time?.slice(0, 5) || '09:00',
            endTime: row.end_time?.slice(0, 5) || '10:00',
            location: row.location || '',
            description: row.description || '',
            assignedTo: row.assigned_to,
            category: row.category
        }));

        res.json({ success: true, data: events });
    } catch (error) {
        console.error('getEvents error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch events' });
    }
};

// POST create new event
const createEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id, title, date, startTime, endTime, location, description, assignedTo, category } = req.body;

        if (!title || !date || !startTime || !endTime) {
            return res.status(400).json({ success: false, message: 'Title, date, startTime, and endTime are required' });
        }

        const eventId = id || require('crypto').randomUUID();

        await db.execute(
            `INSERT INTO calendar_events (id, user_id, title, date, start_time, end_time, location, description, assigned_to, category)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [eventId, userId, title, date, startTime, endTime, location || null, description || null, assignedTo || 'Bride', category || 'Other']
        );

        res.status(201).json({
            success: true,
            message: 'Event created successfully',
            data: { id: eventId, title, date, startTime, endTime, location, description, assignedTo, category }
        });
    } catch (error) {
        console.error('createEvent error:', error);
        res.status(500).json({ success: false, message: 'Failed to create event' });
    }
};

// PUT update existing event
const updateEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { title, date, startTime, endTime, location, description, assignedTo, category } = req.body;

        // Verify ownership
        const [existing] = await db.execute(
            'SELECT id FROM calendar_events WHERE id = ? AND user_id = ?',
            [id, userId]
        );

        if (existing.length === 0) {
            return res.status(404).json({ success: false, message: 'Event not found or unauthorized' });
        }

        await db.execute(
            `UPDATE calendar_events 
             SET title = ?, date = ?, start_time = ?, end_time = ?, location = ?, description = ?, assigned_to = ?, category = ?
             WHERE id = ? AND user_id = ?`,
            [title, date, startTime, endTime, location || null, description || null, assignedTo, category, id, userId]
        );

        res.json({
            success: true,
            message: 'Event updated successfully',
            data: { id, title, date, startTime, endTime, location, description, assignedTo, category }
        });
    } catch (error) {
        console.error('updateEvent error:', error);
        res.status(500).json({ success: false, message: 'Failed to update event' });
    }
};

// DELETE event
const deleteEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const [result] = await db.execute(
            'DELETE FROM calendar_events WHERE id = ? AND user_id = ?',
            [id, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Event not found or unauthorized' });
        }

        res.json({ success: true, message: 'Event deleted successfully' });
    } catch (error) {
        console.error('deleteEvent error:', error);
        res.status(500).json({ success: false, message: 'Failed to delete event' });
    }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };