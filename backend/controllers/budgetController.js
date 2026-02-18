// controllers/budgetController.js
const db = require('../config/weddingToolsDb');

const getOrCreateUserBudget = async (userId) => {
    try {
        const [existingBudget] = await db.query(
            'SELECT * FROM budgets WHERE user_id = ?',
            [userId]
        );

        if (existingBudget.length > 0) {
            return existingBudget[0];
        }

        // New user — start with 0 so the frontend shows the budget-setup screen
        const [result] = await db.query(
            'INSERT INTO budgets (user_id, total_budget) VALUES (?, ?)',
            [userId, 0]   // <-- was 1760000, now 0
        );

        await db.query('CALL insert_default_budget_categories(?)', [result.insertId]);

        const [newBudget] = await db.query(
            'SELECT * FROM budgets WHERE id = ?',
            [result.insertId]
        );

        return newBudget[0];
    } catch (error) {
        console.error('Error in getOrCreateUserBudget:', error);
        throw error;
    }
};

const addCategory = async (req, res) => {
    console.log('addCategory hit', req.body, req.user);
    try {
        const { name, planned, color } = req.body;
        const userId = req.user.id;

        if (!name) return res.status(400).json({ success: false, message: 'Category name is required' });

        const budget = await getOrCreateUserBudget(userId);

        const [result] = await db.query(
            'INSERT INTO budget_categories (budget_id, name, planned_amount, color, display_order) VALUES (?, ?, ?, ?, ?)',
            [budget.id, name, planned || 0, color || '#6d6d6d', 99]
        );

        res.status(201).json({
            success: true,
            data: { id: result.insertId, name, planned: planned || 0, color: color || '#6d6d6d', spent: 0 }
        });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ success: false, message: 'Failed to add category' });
    }
};

const getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;
        const budget = await getOrCreateUserBudget(userId);

        const [categories] = await db.query(`
            SELECT 
                c.id, c.name, c.planned_amount as planned, c.color, c.display_order,
                COALESCE(SUM(e.amount), 0) as spent
            FROM budget_categories c
            LEFT JOIN budget_expenses e ON c.id = e.category_id
            WHERE c.budget_id = ?
            GROUP BY c.id, c.name, c.planned_amount, c.color, c.display_order
            ORDER BY c.display_order, c.id
        `, [budget.id]);

        const [expenses] = await db.query(`
            SELECT 
                e.id, e.title, e.amount, e.date,
                e.payment_method as paymentMethod, e.notes,
                e.vendor_name as vendorName, c.name as category
            FROM budget_expenses e
            JOIN budget_categories c ON e.category_id = c.id
            WHERE e.budget_id = ?
            ORDER BY e.date DESC, e.created_at DESC
        `, [budget.id]);

        const totalSpent = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
        const totalBudget = parseFloat(budget.total_budget);

        res.json({
            success: true,
            data: {
                summary: {
                    totalBudget,
                    totalSpent,
                    remaining: totalBudget - totalSpent
                },
                categories: categories.map(cat => ({
                    ...cat,
                    planned: parseFloat(cat.planned),
                    spent: parseFloat(cat.spent)
                })),
                recentExpenses: expenses.map(exp => ({
                    ...exp,
                    amount: parseFloat(exp.amount)
                }))
            }
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch dashboard data' });
    }
};

const addExpense = async (req, res) => {
    try {
        const { title, amount, date, category, paymentMethod, notes, vendorName } = req.body;
        const userId = req.user.id;

        if (!title || !amount || !date || !category) {
            return res.status(400).json({
                success: false,
                message: 'Title, amount, date, and category are required'
            });
        }

        const budget = await getOrCreateUserBudget(userId);

        const [categoryRows] = await db.query(
            'SELECT id FROM budget_categories WHERE name = ? AND budget_id = ?',
            [category, budget.id]
        );

        if (categoryRows.length === 0) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        const [result] = await db.query(
            'INSERT INTO budget_expenses (budget_id, category_id, title, amount, date, payment_method, notes, vendor_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [budget.id, categoryRows[0].id, title, amount, date, paymentMethod || 'UPI', notes || null, vendorName || null]
        );

        const [newExpense] = await db.query(
            `SELECT e.id, e.title, e.amount, e.date, e.payment_method as paymentMethod,
                    e.notes, e.vendor_name as vendorName, c.name as category
             FROM budget_expenses e
             JOIN budget_categories c ON e.category_id = c.id
             WHERE e.id = ?`,
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            data: { ...newExpense[0], amount: parseFloat(newExpense[0].amount) }
        });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ success: false, message: 'Failed to add expense' });
    }
};

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, amount, date, category, paymentMethod, notes, vendorName } = req.body;
        const userId = req.user.id;

        const budget = await getOrCreateUserBudget(userId);

        const [expenseCheck] = await db.query(
            'SELECT id FROM budget_expenses WHERE id = ? AND budget_id = ?',
            [id, budget.id]
        );

        if (expenseCheck.length === 0) {
            return res.status(404).json({ success: false, message: 'Expense not found or unauthorized' });
        }

        const [categoryRows] = await db.query(
            'SELECT id FROM budget_categories WHERE name = ? AND budget_id = ?',
            [category, budget.id]
        );

        if (categoryRows.length === 0) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        await db.query(
            'UPDATE budget_expenses SET title = ?, amount = ?, date = ?, category_id = ?, payment_method = ?, notes = ?, vendor_name = ? WHERE id = ?',
            [title, amount, date, categoryRows[0].id, paymentMethod, notes, vendorName, id]
        );

        const [updatedExpense] = await db.query(
            `SELECT e.id, e.title, e.amount, e.date, e.payment_method as paymentMethod,
                    e.notes, e.vendor_name as vendorName, c.name as category
             FROM budget_expenses e
             JOIN budget_categories c ON e.category_id = c.id
             WHERE e.id = ?`,
            [id]
        );

        res.json({
            success: true,
            data: { ...updatedExpense[0], amount: parseFloat(updatedExpense[0].amount) }
        });
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ success: false, message: 'Failed to update expense' });
    }
};

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const budget = await getOrCreateUserBudget(userId);

        const [result] = await db.query(
            'DELETE FROM budget_expenses WHERE id = ? AND budget_id = ?',
            [id, budget.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Expense not found or unauthorized' });
        }

        res.json({ success: true, message: 'Expense deleted successfully' });
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ success: false, message: 'Failed to delete expense' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { planned } = req.body;
        const userId = req.user.id;

        if (!planned || planned < 0) {
            return res.status(400).json({ success: false, message: 'Valid planned amount is required' });
        }

        const budget = await getOrCreateUserBudget(userId);

        const [result] = await db.query(
            'UPDATE budget_categories SET planned_amount = ? WHERE id = ? AND budget_id = ?',
            [planned, id, budget.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Category not found or unauthorized' });
        }

        const [updatedCategory] = await db.query(
            'SELECT id, name, planned_amount as planned, color FROM budget_categories WHERE id = ?',
            [id]
        );

        res.json({
            success: true,
            data: { ...updatedCategory[0], planned: parseFloat(updatedCategory[0].planned) }
        });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ success: false, message: 'Failed to update category' });
    }
};

const updateBudget = async (req, res) => {
    try {
        const { amount, weddingDate, brideName, groomName } = req.body;
        const userId = req.user.id;

        if (amount !== undefined && amount < 0) {
            return res.status(400).json({ success: false, message: 'Budget amount cannot be negative' });
        }

        const budget = await getOrCreateUserBudget(userId);
        const updates = [];
        const values = [];

        if (amount !== undefined) {
            updates.push('total_budget = ?');
            values.push(amount);
        }
        if (weddingDate !== undefined) {
            updates.push('wedding_date = ?');
            values.push(weddingDate);
        }
        if (brideName !== undefined) {
            updates.push('bride_name = ?');
            values.push(brideName);
        }
        if (groomName !== undefined) {
            updates.push('groom_name = ?');
            values.push(groomName);
        }

        if (updates.length === 0) {
            return res.status(400).json({ success: false, message: 'No fields to update' });
        }

        values.push(budget.id);
        await db.query(`UPDATE budgets SET ${updates.join(', ')} WHERE id = ?`, values);

        const [updatedBudget] = await db.query('SELECT * FROM budgets WHERE id = ?', [budget.id]);

        res.json({
            success: true,
            data: {
                totalBudget: parseFloat(updatedBudget[0].total_budget),
                weddingDate: updatedBudget[0].wedding_date,
                brideName: updatedBudget[0].bride_name,
                groomName: updatedBudget[0].groom_name
            }
        });
    } catch (error) {
        console.error('Error updating budget:', error);
        res.status(500).json({ success: false, message: 'Failed to update budget' });
    }
};

module.exports = {
    getDashboardData,
    addExpense,
    updateExpense,
    deleteExpense,
    updateCategory,
    updateBudget,
    addCategory, 
};