// controllers/taskController.js
// Handles tasks CRUD + status toggling

const db = require('../config/weddingToolsDb');

// GET /api/wedding-tools/tasks
const getTasks = async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT id, title, assignee, priority,
                    DATE_FORMAT(due_date, '%Y-%m-%d') AS due,
                    status, created_at
             FROM tasks
             WHERE user_id = ?
             ORDER BY created_at ASC`,
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getTasks error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/tasks
const addTask = async (req, res) => {
    try {
        const { title, assignee, priority, due } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, message: 'Task title is required.' });
        }

        const [result] = await db.query(
            `INSERT INTO tasks (user_id, title, assignee, priority, due_date, status)
             VALUES (?, ?, ?, ?, ?, 'Pending')`,
            [req.user.id, title, assignee || null, priority || 'Medium', due || null]
        );

        const [rows] = await db.query(
            `SELECT id, title, assignee, priority,
                    DATE_FORMAT(due_date, '%Y-%m-%d') AS due,
                    status, created_at
             FROM tasks WHERE id = ?`,
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: 'Task created.',
            data: rows[0]
        });
    } catch (error) {
        console.error('addTask error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// PATCH /api/wedding-tools/tasks/:id/toggle
// Cycles: Pending → In Progress → Completed → Pending
const toggleTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            'SELECT id, status FROM tasks WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Task not found.' });
        }

        const currentStatus = rows[0].status;
        const nextStatus =
            currentStatus === 'Pending' ? 'In Progress' :
            currentStatus === 'In Progress' ? 'Completed' : 'Pending';

        await db.query(
            'UPDATE tasks SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?',
            [nextStatus, id, req.user.id]
        );

        res.json({
            success: true,
            message: `Task status updated to "${nextStatus}".`,
            data: { id: parseInt(id), status: nextStatus }
        });
    } catch (error) {
        console.error('toggleTaskStatus error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE /api/wedding-tools/tasks/:id
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM tasks WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Task not found.' });
        }

        res.json({ success: true, message: 'Task deleted.' });
    } catch (error) {
        console.error('deleteTask error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getTasks, addTask, toggleTaskStatus, deleteTask };