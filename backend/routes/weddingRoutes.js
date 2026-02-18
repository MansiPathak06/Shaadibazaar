// routes/weddingRoutes.js
const express = require('express');
const router = express.Router();
const protect  = require('../middleware/authMiddleware');

const weddingCtrl       = require('../controllers/weddingController');
const guestCtrl         = require('../controllers/guestController');
const weddingVendorCtrl = require('../controllers/weddingVendorController');
const taskCtrl          = require('../controllers/taskController');

// All routes are protected — user must be logged in
router.use(protect);

// ────────────────────────────────────────────────
// Wedding Setup
// GET  /api/wedding/setup       → fetch wedding details + events
// PUT  /api/wedding/setup       → create / update wedding details
// ────────────────────────────────────────────────
router.get('/setup',  weddingCtrl.getSetup);
router.put('/setup',  weddingCtrl.updateSetup);

// ────────────────────────────────────────────────
// Events
// POST   /api/wedding/events       → add event
// DELETE /api/wedding/events/:id   → remove event
// ────────────────────────────────────────────────
router.post('/events',      weddingCtrl.addEvent);
router.delete('/events/:id', weddingCtrl.deleteEvent);

// ────────────────────────────────────────────────
// Guests  (original routes — unchanged)
// GET    /api/wedding/guests           → list guests (optional ?side=Bride|Groom)
// POST   /api/wedding/guests           → add guest
// PATCH  /api/wedding/guests/:id/rsvp  → update RSVP
// DELETE /api/wedding/guests/:id       → remove guest
// ────────────────────────────────────────────────
router.get('/guests',              guestCtrl.getGuests);
router.post('/guests',             guestCtrl.addGuest);
router.patch('/guests/:id/rsvp',   guestCtrl.updateRsvp);
router.delete('/guests/:id',       guestCtrl.deleteGuest);

// ────────────────────────────────────────────────
// Guest Management App  (NEW — uses same table, extra columns)
// These /manage sub-routes must come BEFORE the /:id routes above
// to avoid Express treating "manage" as a guest id.
// GET    /api/wedding/guests/manage        → list (rich format)
// POST   /api/wedding/guests/manage        → add  (rich format)
// PUT    /api/wedding/guests/manage/:id    → full update
// DELETE /api/wedding/guests/manage/:id   → remove
// ────────────────────────────────────────────────
router.get('/guests/manage',           guestCtrl.getManagedGuests);
router.post('/guests/manage',          guestCtrl.addManagedGuest);
router.put('/guests/manage/:id',       guestCtrl.updateManagedGuest);
router.delete('/guests/manage/:id',    guestCtrl.deleteManagedGuest);

// ────────────────────────────────────────────────
// Vendors
// GET    /api/wedding/vendors       → list vendors
// POST   /api/wedding/vendors       → add vendor
// PATCH  /api/wedding/vendors/:id   → update status / rating
// DELETE /api/wedding/vendors/:id   → remove vendor
// ────────────────────────────────────────────────
router.get('/vendors',         weddingVendorCtrl.getVendors);
router.post('/vendors',        weddingVendorCtrl.addVendor);
router.patch('/vendors/:id',   weddingVendorCtrl.updateVendor);
router.delete('/vendors/:id',  weddingVendorCtrl.deleteVendor);

// ────────────────────────────────────────────────
// Tasks
// GET    /api/wedding/tasks         → list tasks
// POST   /api/wedding/tasks         → add task
// PATCH  /api/wedding/tasks/:id     → toggle complete / set deadline
// DELETE /api/wedding/tasks/:id     → remove task
// ────────────────────────────────────────────────
router.get('/tasks',         taskCtrl.getTasks);
router.post('/tasks',        taskCtrl.addTask);
router.patch('/tasks/:id', taskCtrl.toggleTaskStatus);
router.delete('/tasks/:id',  taskCtrl.deleteTask);

module.exports = router;