const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all products (public)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = `
      SELECT p.*, v.business_name as vendor_name 
      FROM products p 
      LEFT JOIN vendors v ON p.vendor_id = v.id
    `;
    
    const params = [];
    
    if (category) {
      query += ' WHERE p.category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY p.created_at DESC';
    
    const [products] = await db.query(query, params);
    
    // Parse images
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

module.exports = router;
