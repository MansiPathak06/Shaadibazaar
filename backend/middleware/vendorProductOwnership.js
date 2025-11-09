// middleware/vendorProductOwnership.js
const db = require('../config/db');

module.exports = async function(req, res, next) {
  const productId = req.params.id;
  const vendorId = req.user.id; // from JWT
  const [rows] = await db.query('SELECT vendor_id FROM products WHERE id=?', [productId]);
  if (!rows.length) return res.status(404).json({ success: false, message: "Product not found" });
  if (rows[0].vendor_id !== vendorId) 
    return res.status(403).json({ success: false, message: "Permission denied" });
  next();
};
