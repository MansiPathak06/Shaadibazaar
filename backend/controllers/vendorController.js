const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Vendor Sign Up Controller
exports.vendorSignup = async (req, res) => {
  try {
    const { 
      business_name, 
      owner_name, 
      email, 
      password, 
      confirmPassword,
      phone,
      business_type,
      address,
      city,
      state,
      pincode
    } = req.body;

    // Validation
    if (!business_name || !owner_name || !email || !password || !confirmPassword || !business_type) {
      return res.status(400).json({ 
        success: false, 
        message: 'All required fields must be filled' 
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Passwords do not match' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password must be at least 6 characters' 
      });
    }

    // Check if vendor already exists
    const [existingVendors] = await db.query(
      'SELECT * FROM vendors WHERE email = ?',
      [email]
    );

    if (existingVendors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered as vendor' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert vendor into database
    const [result] = await db.query(
      `INSERT INTO vendors 
       (business_name, owner_name, email, password, phone, business_type, address, city, state, pincode, role) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [business_name, owner_name, email, hashedPassword, phone, business_type, address, city, state, pincode, 'vendor']
    );

    // Create JWT token
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
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};

// Vendor Sign In Controller
exports.vendorSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Check if vendor exists
    const [vendors] = await db.query(
      'SELECT * FROM vendors WHERE email = ?',
      [email]
    );

    if (vendors.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    const vendor = vendors[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, vendor.password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Create JWT token
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
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};

// Get All Vendors (Admin only)
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
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};

// Approve Vendor (Admin only)
exports.approveVendor = async (req, res) => {
  try {
    const { vendorId } = req.params;

    await db.query(
      'UPDATE vendors SET is_approved = TRUE WHERE id = ?',
      [vendorId]
    );

    res.status(200).json({
      success: true,
      message: 'Vendor approved successfully'
    });

  } catch (error) {
    console.error('Approve vendor error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};
