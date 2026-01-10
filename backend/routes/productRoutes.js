const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all products (public, with category filter)
router.get('/', async (req, res) => {
  try {
    const { category, subCategory, religion } = req.query; // 👈 ADD religion here
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
    
    if (subCategory) {
      conditions.push('p.subCategory = ?');
      params.push(subCategory);
    }
    
    if (religion) { // 👈 ADD this block
      conditions.push('p.religion = ?');
      params.push(religion);
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

// Similar products endpoint
router.get('/similar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get the main product's category and religion
    const [mainRows] = await db.query(
      'SELECT category, religion FROM products WHERE id = ?', 
      [id]
    );
    
    if (!mainRows.length) {
      return res.json({ success: true, products: [] });
    }
    
    const { category, religion } = mainRows[0]; // 👈 GET religion from main product
    
    // Get similar products (same category and religion if available)
    let query = `
      SELECT p.*, v.business_name as vendor_name 
      FROM products p 
      LEFT JOIN vendors v ON p.vendor_id = v.id
      WHERE p.category = ? AND p.id <> ?
    `;
    const params = [category, id];
    
    if (religion) { // 👈 ADD religion filter
      query += ' AND p.religion = ?';
      params.push(religion);
    }
    
    query += ' ORDER BY RAND() LIMIT 8';
    
    const [rows] = await db.query(query, params);
    
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

// 👇 ADD CREATE PRODUCT ROUTE (if you don't have it)
router.post('/', async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      mrp,
      category,
      subCategory,
      religion, // 👈 ADD THIS
      images,
      vendor_id,
      stock,
      rating,
      featured
    } = req.body;

    // Validate required fields
    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: 'Name, price, and category are required'
      });
    }

    // Parse images if it's a string
    const imageArray = typeof images === 'string' 
      ? images.split(',').map(img => img.trim()) 
      : images;

    const [result] = await db.query(
      `INSERT INTO products 
       (name, description, price, mrp, category, subCategory, religion, images, vendor_id, stock, rating, featured) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        description,
        price,
        mrp || price,
        category,
        subCategory || null,
        religion || 'general', // 👈 DEFAULT to 'general'
        JSON.stringify(imageArray),
        vendor_id || null,
        stock || 0,
        rating || 0,
        featured || false
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      productId: result.insertId
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// 👇 ADD UPDATE PRODUCT ROUTE (if you don't have it)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      mrp,
      category,
      subCategory,
      religion, // 👈 ADD THIS
      images,
      vendor_id,
      stock,
      rating,
      featured
    } = req.body;

    // Check if product exists
    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Parse images if it's a string
    const imageArray = typeof images === 'string' 
      ? images.split(',').map(img => img.trim()) 
      : images;

    await db.query(
      `UPDATE products SET 
       name = ?, description = ?, price = ?, mrp = ?, 
       category = ?, subCategory = ?, religion = ?, images = ?, 
       vendor_id = ?, stock = ?, rating = ?, featured = ?
       WHERE id = ?`,
      [
        name,
        description,
        price,
        mrp || price,
        category,
        subCategory || null,
        religion || existing[0].religion || 'general', // 👈 KEEP existing or default
        JSON.stringify(imageArray),
        vendor_id || null,
        stock || 0,
        rating || 0,
        featured || false,
        id
      ]
    );

    res.json({
      success: true,
      message: 'Product updated successfully'
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// 👇 ADD DELETE PRODUCT ROUTE (if you don't have it)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
