const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes (no authentication required)
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

// Protected routes (authentication required)
router.get('/profile', authMiddleware, authController.getProfile);

// --- Google OAuth routes ---
// Redirect user to Google for consent
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback url (called by Google after login)
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Auth successful, redirect to your frontend
    res.redirect('http://localhost:3000/auth?login=success');
  }
);

module.exports = router;
