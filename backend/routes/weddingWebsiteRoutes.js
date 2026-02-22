// routes/weddingWebsiteRoutes.js
const express = require('express');
const router = express.Router();
const {
  createWeddingWebsite,
  updateWeddingWebsite,
  getWeddingWebsiteBySlug,
  getWeddingWebsiteByToken,
  getWebsitesByUser,
  deleteWeddingWebsite,
  submitRsvp,
  getRsvps,
} = require('../controllers/weddingWebsiteController');

// ── Public routes ─────────────────────────────────────────────────────────────

// GET /api/wedding-website/user/:userId
router.get('/user/:userId', getWebsitesByUser);
// Create a new wedding website
// POST /api/wedding-website
router.post('/', createWeddingWebsite);

// Get website by slug (public shareable)
// GET /api/wedding-website/slug/:slug
router.get('/slug/:slug', getWeddingWebsiteBySlug);

// Get website by share token
// GET /api/wedding-website/token/:token
router.get('/token/:token', getWeddingWebsiteByToken);

// Submit RSVP
// POST /api/wedding-website/:id/rsvp
router.post('/:id/rsvp', submitRsvp);

// ── Owner routes (token-verified in controller) ───────────────────────────────

// Update website
// PUT /api/wedding-website/:id  body: { share_token, ...fields }
router.put('/:id', updateWeddingWebsite);

// Delete website
// DELETE /api/wedding-website/:id  body: { share_token }
router.delete('/:id', deleteWeddingWebsite);

// Get RSVPs (owner only)
// GET /api/wedding-website/:id/rsvps?token=xxx
router.get('/:id/rsvps', getRsvps);

// ── User websites ─────────────────────────────────────────────────────────────

// Get all websites for a user


module.exports = router;