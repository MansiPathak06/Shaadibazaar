const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Public routes
router.post('/signup', vendorController.vendorSignup);
router.post('/signin', vendorController.vendorSignin);

// Admin only routes
router.get('/all', authMiddleware, adminMiddleware, vendorController.getAllVendors);
router.put('/approve/:vendorId', authMiddleware, adminMiddleware, vendorController.approveVendor);

module.exports = router;
