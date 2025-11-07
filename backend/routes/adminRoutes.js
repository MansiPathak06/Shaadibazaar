const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middleware/adminMiddleware');

// Apply admin middleware to all routes
router.use(adminMiddleware);

// ==================== DASHBOARD STATS ====================
router.get('/stats', adminController.getStats);

// ==================== PRODUCTS ROUTES ====================
router.get('/products', adminController.getAllProducts);
router.get('/products/:id', adminController.getProductById);
router.post('/products', adminController.createProduct);
router.put('/products/:id', adminController.updateProduct);
router.delete('/products/:id', adminController.deleteProduct);

// ==================== USERS ROUTES ====================
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.delete('/users/:id', adminController.deleteUser);

// ==================== VENDORS ROUTES ====================
router.get('/vendors', adminController.getAllVendors);
router.get('/vendors/:id', adminController.getVendorById);
router.put('/vendors/:id/approve', adminController.approveVendor);
router.delete('/vendors/:id', adminController.deleteVendor);

module.exports = router;
