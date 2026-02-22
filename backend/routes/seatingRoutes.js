const express = require('express');
const router = express.Router();
const {
    getGuests,
    addGuest,
    updateGuest,
    deleteGuest,
    getTables,
    addTable,
    updateTable,
    deleteTable,
    assignGuest,
} = require('../controllers/seatingControllers');
const  protect  = require('../middleware/authMiddleware'); // adjust path if needed

// All routes require authentication
router.use(protect);

// ─── GUESTS ──────────────────────────────────────────────────────────────────
router.get('/guests',          getGuests);
router.post('/guests',         addGuest);
router.put('/guests/:id',      updateGuest);
router.delete('/guests/:id',   deleteGuest);

// Assign or unassign a guest from a table
// Body: { tableId: "some-id" }  or  { tableId: null }
router.patch('/guests/:id/assign', assignGuest);

// ─── TABLES ──────────────────────────────────────────────────────────────────
router.get('/tables',          getTables);
router.post('/tables',         addTable);
router.put('/tables/:id',      updateTable);
router.delete('/tables/:id',   deleteTable);

module.exports = router;