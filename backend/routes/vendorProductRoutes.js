const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const authMiddleware = require('../middleware/authMiddleware');
const vendorProductOwnership = require('../middleware/vendorProductOwnership');

// Protect all vendor product routes with vendor auth middleware
router.use(authMiddleware);

// Routes for vendor product management
router.get('/', vendorController.getMyProducts);
router.post('/', vendorController.addProduct);
router.post('/bulk-import', vendorController.bulkImportProducts);
router.put('/:id', vendorProductOwnership, vendorController.updateProduct);
router.delete('/:id', vendorProductOwnership, vendorController.deleteProduct);

module.exports = router;
