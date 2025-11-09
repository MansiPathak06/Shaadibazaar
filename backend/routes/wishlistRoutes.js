const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/authMiddleware');

// Get wishlist for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const [items] = await db.query(
      `SELECT w.id, w.product_id, p.name FROM wishlist w LEFT JOIN products p ON w.product_id = p.id WHERE w.user_id=?`, [req.user.id]
    );
    res.json({ success: true, wishlist: items });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not fetch wishlist" });
  }
});

// Add to wishlist
router.post('/', auth, async (req, res) => {
  const { product_id } = req.body;
  if (!product_id) return res.status(400).json({ success: false, message: "Product required" });
  await db.query(`INSERT IGNORE INTO wishlist(user_id, product_id) VALUES (?,?)`, [req.user.id, product_id]);
  res.json({ success: true });
});

// Remove from wishlist
router.delete('/:id', auth, async (req, res) => {
  await db.query(`DELETE FROM wishlist WHERE id=? AND user_id=?`, [req.params.id, req.user.id]);
  res.json({ success: true });
});

module.exports = router;
