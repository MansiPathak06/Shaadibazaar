const express = require('express');
const router = express.Router();
const {
  getAllDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  getDashboardStats
} = require('../controllers/documentsController');

// ─── AUTH MIDDLEWARE ──────────────────────────────────────────────────────────
// Uses YOUR existing middleware/auth.js file — no changes needed there
const verifyToken = require('../middleware/authMiddleware');

// All document routes require a valid JWT token
router.use(verifyToken);

// GET    /api/documents/stats   → dashboard counts
// GET    /api/documents         → all documents for logged-in user
// GET    /api/documents/:id     → single document
// POST   /api/documents         → save new document metadata
// PUT    /api/documents/:id     → update document info
// DELETE /api/documents/:id     → remove document

router.get('/stats', getDashboardStats);
router.get('/', getAllDocuments);
router.get('/:id', getDocument);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

module.exports = router;