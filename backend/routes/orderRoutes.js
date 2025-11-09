const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/authMiddleware');

// Get logged-in user's orders (profile Orders tab)
router.get('/my-orders', auth, async (req, res) => {
  try {
    const [orders] = await db.query(
      `SELECT * FROM orders WHERE user_id=? ORDER BY created_at DESC`, [req.user.id]
    );
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not fetch orders" });
  }
});

module.exports = router;
