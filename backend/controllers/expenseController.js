// controllers/expenseController.js
// Handles expenses CRUD + analytics aggregations

const db = require('../config/weddingToolsDb');

// GET /api/wedding-tools/expenses
const getExpenses = async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT id, category, amount, vendor,
                    DATE_FORMAT(expense_date, '%m/%d/%Y') AS date,
                    created_at
             FROM expenses
             WHERE user_id = ?
             ORDER BY created_at ASC`,
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getExpenses error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/expenses
const addExpense = async (req, res) => {
    try {
        const { category, amount, vendor } = req.body;

        if (!category || !amount || !vendor) {
            return res.status(400).json({
                success: false,
                message: 'Category, amount, and vendor are required.'
            });
        }

        if (isNaN(amount) || Number(amount) <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Amount must be a positive number.'
            });
        }

        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        const [result] = await db.query(
            `INSERT INTO expenses (user_id, category, amount, vendor, expense_date)
             VALUES (?, ?, ?, ?, ?)`,
            [req.user.id, category, Number(amount), vendor, today]
        );

        const [rows] = await db.query(
            `SELECT id, category, amount, vendor,
                    DATE_FORMAT(expense_date, '%m/%d/%Y') AS date
             FROM expenses WHERE id = ?`,
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: 'Expense recorded.',
            data: rows[0]
        });
    } catch (error) {
        console.error('addExpense error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// GET /api/wedding-tools/expenses/by-date
// Returns expenses grouped by date for the analytics area chart
const getExpensesByDate = async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT DATE_FORMAT(expense_date, '%m/%d/%Y') AS date,
                    SUM(amount) AS amount
             FROM expenses
             WHERE user_id = ?
             GROUP BY expense_date
             ORDER BY expense_date ASC`,
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getExpensesByDate error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE /api/wedding-tools/expenses/:id
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM expenses WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Expense not found.' });
        }

        res.json({ success: true, message: 'Expense deleted.' });
    } catch (error) {
        console.error('deleteExpense error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { getExpenses, addExpense, getExpensesByDate, deleteExpense };