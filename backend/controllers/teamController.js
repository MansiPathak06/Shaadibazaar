// controllers/teamController.js
// Handles team members CRUD

const db = require('../config/weddingToolsDb');

// GET /api/wedding-tools/team
const getTeamMembers = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM team_members WHERE user_id = ? ORDER BY created_at ASC',
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getTeamMembers error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/team
const addTeamMember = async (req, res) => {
    try {
        const { name, role, status } = req.body;

        if (!name || !role) {
            return res.status(400).json({
                success: false,
                message: 'Name and role are required.'
            });
        }

        const avatar = name.substring(0, 2).toUpperCase();

        const [result] = await db.query(
            `INSERT INTO team_members (user_id, name, role, status, avatar)
             VALUES (?, ?, ?, ?, ?)`,
            [req.user.id, name, role, status || 'offline', avatar]
        );

        const [rows] = await db.query(
            'SELECT * FROM team_members WHERE id = ?',
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: 'Team member added.',
            data: rows[0]
        });
    } catch (error) {
        console.error('addTeamMember error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE /api/wedding-tools/team/:id
const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM team_members WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Member not found.' });
        }

        res.json({ success: true, message: 'Team member removed.' });
    } catch (error) {
        console.error('deleteTeamMember error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getTeamMembers, addTeamMember, deleteTeamMember };