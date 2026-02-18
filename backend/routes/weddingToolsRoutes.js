// routes/weddingToolsRoutes.js
// All wedding planning tool routes — protected by auth middleware

const express = require('express');
const router = express.Router();
const  protect  = require('../middleware/authMiddleware');

// Controllers
const { getWeddingEvent, upsertWeddingEvent } = require('../controllers/weddingToolsController');
const { getTeamMembers, addTeamMember, deleteTeamMember } = require('../controllers/teamController');
const { getTasks, addTask, toggleTaskStatus, deleteTask } = require('../controllers/taskController');
const { getExpenses, addExpense, getExpensesByDate, deleteExpense } = require('../controllers/expenseController');
const {
    getVendors, addVendor, updateVendorStatus, deleteVendor,
    getTravelDetails, addTravelDetail, deleteTravelDetail
} = require('../controllers/vendorToolsController');

// Apply auth middleware to ALL routes in this router
router.use(protect);

/* ─────────── WEDDING EVENT (Onboarding) ─────────── */
router.get('/event', getWeddingEvent);
router.post('/event', upsertWeddingEvent);

/* ─────────── TEAM MEMBERS ─────────── */
router.get('/team', getTeamMembers);
router.post('/team', addTeamMember);
router.delete('/team/:id', deleteTeamMember);

/* ─────────── TASKS ─────────── */
router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.patch('/tasks/:id/toggle', toggleTaskStatus);
router.delete('/tasks/:id', deleteTask);

/* ─────────── EXPENSES ─────────── */
router.get('/expenses', getExpenses);
router.post('/expenses', addExpense);
router.get('/expenses/by-date', getExpensesByDate);
router.delete('/expenses/:id', deleteExpense);

/* ─────────── VENDORS ─────────── */
router.get('/vendors', getVendors);
router.post('/vendors', addVendor);
router.patch('/vendors/:id/status', updateVendorStatus);
router.delete('/vendors/:id', deleteVendor);

/* ─────────── TRAVEL / LOGISTICS ─────────── */
router.get('/travel', getTravelDetails);
router.post('/travel', addTravelDetail);
router.delete('/travel/:id', deleteTravelDetail);

module.exports = router;