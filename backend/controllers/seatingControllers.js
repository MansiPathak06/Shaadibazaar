const db = require('../config/weddingToolsDb');
const { v4: uuidv4 } = require('uuid');

// ─── GUESTS ──────────────────────────────────────────────────────────────────

/**
 * GET /api/seating/guests
 * Returns all guests belonging to the logged-in user
 */
const getGuests = async (req, res) => {
    try {
        const userId = req.user.id;
        const [rows] = await db.query(
            'SELECT * FROM seating_guests WHERE user_id = ? ORDER BY created_at ASC',
            [userId]
        );

        // Map snake_case → camelCase for the frontend
        const guests = rows.map(mapGuest);
        res.json({ success: true, guests });
    } catch (err) {
        console.error('getGuests error:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch guests' });
    }
};

/**
 * POST /api/seating/guests
 * Body: { name, rsvp, meal }
 */
const addGuest = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, rsvp = 'pending', meal = 'veg' } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ success: false, message: 'Guest name is required' });
        }

        const id = uuidv4();
        await db.query(
            'INSERT INTO seating_guests (id, user_id, name, rsvp, meal) VALUES (?, ?, ?, ?, ?)',
            [id, userId, name.trim(), rsvp, meal]
        );

        const [rows] = await db.query('SELECT * FROM seating_guests WHERE id = ?', [id]);
        res.status(201).json({ success: true, guest: mapGuest(rows[0]) });
    } catch (err) {
        console.error('addGuest error:', err);
        res.status(500).json({ success: false, message: 'Failed to add guest' });
    }
};

/**
 * PUT /api/seating/guests/:id
 * Body: any subset of { name, rsvp, meal, tableId }
 */
const updateGuest = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { name, rsvp, meal, tableId } = req.body;

        // Verify ownership
        const [existing] = await db.query(
            'SELECT * FROM seating_guests WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        if (!existing.length) {
            return res.status(404).json({ success: false, message: 'Guest not found' });
        }

        const fields = [];
        const values = [];

        if (name !== undefined)    { fields.push('name = ?');     values.push(name.trim()); }
        if (rsvp !== undefined)    { fields.push('rsvp = ?');     values.push(rsvp); }
        if (meal !== undefined)    { fields.push('meal = ?');     values.push(meal); }
        if (tableId !== undefined) { fields.push('table_id = ?'); values.push(tableId || null); }

        if (!fields.length) {
            return res.status(400).json({ success: false, message: 'No fields to update' });
        }

        values.push(id, userId);
        await db.query(
            `UPDATE seating_guests SET ${fields.join(', ')} WHERE id = ? AND user_id = ?`,
            values
        );

        const [rows] = await db.query('SELECT * FROM seating_guests WHERE id = ?', [id]);
        res.json({ success: true, guest: mapGuest(rows[0]) });
    } catch (err) {
        console.error('updateGuest error:', err);
        res.status(500).json({ success: false, message: 'Failed to update guest' });
    }
};

/**
 * DELETE /api/seating/guests/:id
 */
const deleteGuest = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM seating_guests WHERE id = ? AND user_id = ?',
            [id, userId]
        );

        if (!result.affectedRows) {
            return res.status(404).json({ success: false, message: 'Guest not found' });
        }
        res.json({ success: true, message: 'Guest deleted' });
    } catch (err) {
        console.error('deleteGuest error:', err);
        res.status(500).json({ success: false, message: 'Failed to delete guest' });
    }
};

// ─── TABLES ──────────────────────────────────────────────────────────────────

/**
 * GET /api/seating/tables
 */
const getTables = async (req, res) => {
    try {
        const userId = req.user.id;
        const [rows] = await db.query(
            'SELECT * FROM seating_tables WHERE user_id = ? ORDER BY created_at ASC',
            [userId]
        );

        res.json({ success: true, tables: rows.map(mapTable) });
    } catch (err) {
        console.error('getTables error:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch tables' });
    }
};

/**
 * POST /api/seating/tables
 * Body: { name, capacity, type, x, y }
 */
const addTable = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, capacity = 8, type = 'round', x = 50, y = 50 } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ success: false, message: 'Table name is required' });
        }

        const id = uuidv4();
        await db.query(
            'INSERT INTO seating_tables (id, user_id, name, capacity, type, x, y) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [id, userId, name.trim(), capacity, type, x, y]
        );

        const [rows] = await db.query('SELECT * FROM seating_tables WHERE id = ?', [id]);
        res.status(201).json({ success: true, table: mapTable(rows[0]) });
    } catch (err) {
        console.error('addTable error:', err);
        res.status(500).json({ success: false, message: 'Failed to add table' });
    }
};

/**
 * PUT /api/seating/tables/:id
 * Body: any subset of { name, capacity, type, x, y }
 */
const updateTable = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { name, capacity, type, x, y } = req.body;

        const [existing] = await db.query(
            'SELECT * FROM seating_tables WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        if (!existing.length) {
            return res.status(404).json({ success: false, message: 'Table not found' });
        }

        const fields = [];
        const values = [];

        if (name !== undefined)     { fields.push('name = ?');     values.push(name.trim()); }
        if (capacity !== undefined) { fields.push('capacity = ?'); values.push(capacity); }
        if (type !== undefined)     { fields.push('type = ?');     values.push(type); }
        if (x !== undefined)        { fields.push('x = ?');        values.push(x); }
        if (y !== undefined)        { fields.push('y = ?');        values.push(y); }

        if (!fields.length) {
            return res.status(400).json({ success: false, message: 'No fields to update' });
        }

        values.push(id, userId);
        await db.query(
            `UPDATE seating_tables SET ${fields.join(', ')} WHERE id = ? AND user_id = ?`,
            values
        );

        const [rows] = await db.query('SELECT * FROM seating_tables WHERE id = ?', [id]);
        res.json({ success: true, table: mapTable(rows[0]) });
    } catch (err) {
        console.error('updateTable error:', err);
        res.status(500).json({ success: false, message: 'Failed to update table' });
    }
};

/**
 * DELETE /api/seating/tables/:id
 * Also unassigns all guests seated at this table
 */
const deleteTable = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const [existing] = await db.query(
            'SELECT * FROM seating_tables WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        if (!existing.length) {
            return res.status(404).json({ success: false, message: 'Table not found' });
        }

        // Unassign guests first
        await db.query(
            'UPDATE seating_guests SET table_id = NULL WHERE table_id = ? AND user_id = ?',
            [id, userId]
        );

        await db.query('DELETE FROM seating_tables WHERE id = ? AND user_id = ?', [id, userId]);

        res.json({ success: true, message: 'Table deleted and guests unassigned' });
    } catch (err) {
        console.error('deleteTable error:', err);
        res.status(500).json({ success: false, message: 'Failed to delete table' });
    }
};

// ─── ASSIGN / UNASSIGN ───────────────────────────────────────────────────────

/**
 * PATCH /api/seating/guests/:id/assign
 * Body: { tableId }  — pass null to unassign
 */
const assignGuest = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { tableId } = req.body;

        // Verify guest ownership
        const [guestRows] = await db.query(
            'SELECT * FROM seating_guests WHERE id = ? AND user_id = ?',
            [id, userId]
        );
        if (!guestRows.length) {
            return res.status(404).json({ success: false, message: 'Guest not found' });
        }

        // If assigning to a table, verify table ownership + capacity
        if (tableId) {
            const [tableRows] = await db.query(
                'SELECT * FROM seating_tables WHERE id = ? AND user_id = ?',
                [tableId, userId]
            );
            if (!tableRows.length) {
                return res.status(404).json({ success: false, message: 'Table not found' });
            }

            const [countRows] = await db.query(
                'SELECT COUNT(*) AS cnt FROM seating_guests WHERE table_id = ? AND user_id = ? AND id != ?',
                [tableId, userId, id]
            );
            if (countRows[0].cnt >= tableRows[0].capacity) {
                return res.status(400).json({ success: false, message: 'Table is full' });
            }
        }

        await db.query(
            'UPDATE seating_guests SET table_id = ? WHERE id = ? AND user_id = ?',
            [tableId || null, id, userId]
        );

        const [rows] = await db.query('SELECT * FROM seating_guests WHERE id = ?', [id]);
        res.json({ success: true, guest: mapGuest(rows[0]) });
    } catch (err) {
        console.error('assignGuest error:', err);
        res.status(500).json({ success: false, message: 'Failed to assign guest' });
    }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const mapGuest = (row) => ({
    id: row.id,
    name: row.name,
    rsvp: row.rsvp,
    meal: row.meal,
    tableId: row.table_id,
});

const mapTable = (row) => ({
    id: row.id,
    name: row.name,
    capacity: row.capacity,
    type: row.type,
    x: row.x,
    y: row.y,
});

module.exports = {
    getGuests,
    addGuest,
    updateGuest,
    deleteGuest,
    getTables,
    addTable,
    updateTable,
    deleteTable,
    assignGuest,
};