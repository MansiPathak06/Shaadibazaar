// routes/budgetRoutes.js
const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const protect=require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// Dashboard
router.get('/dashboard', budgetController.getDashboardData);

// Expenses
router.post('/expenses', budgetController.addExpense);
router.put('/expenses/:id', budgetController.updateExpense);
router.delete('/expenses/:id', budgetController.deleteExpense);

// Categories
router.put('/categories/:id', budgetController.updateCategory);
router.post('/categories', budgetController.addCategory);

// Budget settings
router.put('/settings', budgetController.updateBudget);

module.exports = router;