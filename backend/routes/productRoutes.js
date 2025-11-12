const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all products (public, with category filter)
router.get('/', async (req, res) => {
  try {
    const { category, subCategory } = req.query; // Add subCategory here
    let query = `
      SELECT p.*, v.business_name as vendor_name 
      FROM products p 
      LEFT JOIN vendors v ON p.vendor_id = v.id
    `;
    const params = [];
    const conditions = [];
    if (category) {
      conditions.push('p.category = ?');
      params.push(category);
    }
    if (subCategory) { // Add this block
      conditions.push('p.subCategory = ?');
      params.push(subCategory);
    }
    if (conditions.length) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY p.created_at DESC';
    const [products] = await db.query(query, params);
    const productsWithParsedImages = products.map(product => ({
      ...product,
      images: typeof product.images === 'string' ? JSON.parse(product.images) : product.images
    }));
    res.json({ success: true, products: productsWithParsedImages });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});


// Get product by ID (public)
router.get('/:id', async (req, res) => {
  // Similar products route must come after all custom /xxx before /:id
  // If you add more routes, add them ABOVE it.
  try {
    const [products] = await db.query(
      `SELECT p.*, v.business_name as vendor_name, v.email as vendor_email 
       FROM products p 
       LEFT JOIN vendors v ON p.vendor_id = v.id 
       WHERE p.id = ?`,
      [req.params.id]
    );
    if (products.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    const product = {
      ...products[0],
      images: typeof products[0].images === 'string' ? JSON.parse(products[0].images) : products[0].images
    };
    res.json({ success: true, product });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// --------------- SIMILAR PRODUCTS ENDPOINT ---------------
router.get('/similar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Get the main product's category
    const [mainRows] = await db.query('SELECT category FROM products WHERE id = ?', [id]);
    if (!mainRows.length) return res.json({ success: true, products: [] });
    const category = mainRows[0].category;
    // Get up to 8 other products from the same category, different id, random
    const [rows] = await db.query(
      `SELECT p.*, v.business_name as vendor_name 
        FROM products p 
        LEFT JOIN vendors v ON p.vendor_id = v.id
        WHERE p.category = ? AND p.id <> ?
        ORDER BY RAND() LIMIT 8`,
      [category, id]
    );
    // Parse images so the frontend gets clean arrays
    const productsWithParsedImages = rows.map(product => ({
      ...product,
      images: typeof product.images === 'string' ? JSON.parse(product.images) : product.images
    }));
    res.json({ success: true, products: productsWithParsedImages });
  } catch (error) {
    console.error('Similar products error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Insert new routes (like /similar/:id) ABOVE this ID route to avoid conflicts!
module.exports = router;
