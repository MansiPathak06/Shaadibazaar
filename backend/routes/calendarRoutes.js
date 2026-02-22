const express = require('express');
const router = express.Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/calendarController');
const protect = require('../middleware/authMiddleware');

// All routes require authentication (same pattern as budgetRoutes)
router.use(protect);

router.get('/', getEvents);           // GET  /api/calendar
router.post('/', createEvent);        // POST /api/calendar
router.put('/:id', updateEvent);      // PUT  /api/calendar/:id
router.delete('/:id', deleteEvent);   // DELETE /api/calendar/:id

module.exports = router;