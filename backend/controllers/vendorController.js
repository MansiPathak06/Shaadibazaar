const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// ===== VENDOR AUTH & ADMIN OPERATIONS =====

// Vendor Sign Up
exports.vendorSignup = async (req, res) => {
  try {
    const { 
      business_name, owner_name, email, password, confirmPassword,
      phone, business_type, address, city, state, pincode
    } = req.body;
    if (!business_name || !owner_name || !email || !password || !confirmPassword || !business_type) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
    }
    const [existingVendors] = await db.query('SELECT * FROM vendors WHERE email = ?', [email]);
    if (existingVendors.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already registered as vendor' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const [result] = await db.query(
      `INSERT INTO vendors (business_name, owner_name, email, password, phone, business_type, address, city, state, pincode, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [business_name, owner_name, email, hashedPassword, phone, business_type, address, city, state, pincode, 'vendor']
    );
    const token = jwt.sign(
      { id: result.insertId, email, role: 'vendor' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({
      success: true,
      message: 'Vendor account created successfully. Awaiting approval.',
      token,
      user: {
        id: result.insertId,
        business_name,
        owner_name,
        email,
        role: 'vendor',
        is_approved: false
      }
    });
  } catch (error) {
    console.error('Vendor signup error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// Vendor Sign In
exports.vendorSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }
    const [vendors] = await db.query('SELECT * FROM vendors WHERE email = ?', [email]);
    if (vendors.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    const vendor = vendors[0];
    const isPasswordValid = await bcrypt.compare(password, vendor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { id: vendor.id, email: vendor.email, role: 'vendor' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(200).json({
      success: true,
      message: 'Vendor login successful',
      token,
      user: {
        id: vendor.id,
        business_name: vendor.business_name,
        owner_name: vendor.owner_name,
        email: vendor.email,
        role: 'vendor',
        is_approved: vendor.is_approved
      }
    });
  } catch (error) {
    console.error('Vendor signin error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// Admin: Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const [vendors] = await db.query(
      'SELECT id, business_name, owner_name, email, phone, business_type, city, is_approved, created_at FROM vendors ORDER BY created_at DESC'
    );
    res.status(200).json({
      success: true,
      count: vendors.length,
      vendors
    });
  } catch (error) {
    console.error('Get vendors error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// Admin: Approve a vendor
exports.approveVendor = async (req, res) => {
  try {
    const { vendorId } = req.params;
    await db.query('UPDATE vendors SET is_approved = TRUE WHERE id = ?', [vendorId]);
    res.status(200).json({ success: true, message: 'Vendor approved successfully' });
  } catch (error) {
    console.error('Approve vendor error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// ===== VENDOR PRODUCT MANAGEMENT (use with /api/vendor/products routes) =====

exports.getMyProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM products WHERE vendor_id = ?', [req.user.id]);
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to load products' });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, mrp, discount, rating, category, subCategory, images, stock, featured } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
    const imgs = Array.isArray(images)
      ? images
      : typeof images === "string"
      ? images.split(",").map(i => i.trim())
      : [];
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, mrp, discount, rating, category, subCategory, images, stock, featured, vendor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, description || '', price, mrp || price, discount || 0, rating || 0, category, subCategory || '', JSON.stringify(imgs), stock || 0, featured ? 1 : 0, req.user.id]
    );
    res.json({ success: true, message: "Product added", id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add product' });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, mrp, discount, rating, category, subCategory, images, stock, featured } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
    const imgs = Array.isArray(images)
      ? images
      : typeof images === "string"
      ? images.split(",").map(i => i.trim())
      : [];
    await db.query(
      'UPDATE products SET name=?, description=?, price=?, mrp=?, discount=?, rating=?, category=?, subCategory=?, images=?, stock=?, featured=? WHERE id=? AND vendor_id=?',
      [name, description || '', price, mrp || price, discount || 0, rating || 0, category, subCategory || '', JSON.stringify(imgs), stock || 0, featured ? 1 : 0, req.params.id, req.user.id]
    );
    res.json({ success: true, message: "Product updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update product' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    await db.query('DELETE FROM products WHERE id=? AND vendor_id=?', [req.params.id, req.user.id]);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
};

exports.bulkImportProducts = async (req, res) => {
  try {
    const products = req.body.products;
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: "No products provided" });
    }
    let imported = 0, errors = [];
    for (let [i, p] of products.entries()) {
      try {
        if (!p.name || !p.price || !p.category) {
          errors.push({ row: i+2, name: p.name, error: "Missing required fields (name, price, category)" });
          continue;
        }
        const imgs = Array.isArray(p.images)
          ? p.images
          : typeof p.images === "string"
          ? p.images.split(",").map(v => v.trim())
          : [];
        await db.query(
          'INSERT INTO products (name, description, price, mrp, discount, rating, category, subCategory, images, stock, featured, vendor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [p.name, p.description || '', p.price, p.mrp || p.price, p.discount || 0, p.rating || 0, p.category, p.subCategory || '', JSON.stringify(imgs), p.stock || 0, p.featured ? 1 : 0, req.user.id]
        );
        imported++;
      } catch (e) {
        errors.push({ row: i+2, name: p.name, error: e.message });
      }
    }
    res.json({ success: true, imported, failed: errors.length, errors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Bulk import server error' });
  }
};

