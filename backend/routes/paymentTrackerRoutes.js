const express = require('express');
const router = express.Router();
const {
  getPayments,
  createPayment,
  updatePayment,
  markAsPaid,
  deletePayment,
} = require('../controllers/paymentTrackerController');

// ✅ Fix: Import as default (not named export)
const authMiddleware = require('../middleware/authMiddleware'); 

// Protect all routes
router.use(authMiddleware);

router.get('/', getPayments);
router.post('/', createPayment);
router.put('/:id', updatePayment);
router.patch('/:id/paid', markAsPaid);
router.delete('/:id', deletePayment);

module.exports = router;
