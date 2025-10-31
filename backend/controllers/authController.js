const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// User Sign Up Controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Check if user already exists
    const [existingUsers] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user into database
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'user']
    );

    // Create JWT token
    const token = jwt.sign(
      { id: result.insertId, email, role: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        id: result.insertId,
        name,
        email,
        role: 'user'
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};

// User/Admin Sign In Controller
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Check in admins table first
    const [admins] = await db.query(
      'SELECT * FROM admins WHERE email = ?',
      [email]
    );

    if (admins.length > 0) {
      const admin = admins[0];
      const isPasswordValid = await bcrypt.compare(password, admin.password);

      if (!isPasswordValid) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid email or password' 
        });
      }

      // Create JWT token for admin
      const token = jwt.sign(
        { id: admin.id, email: admin.email, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({
        success: true,
        message: 'Admin login successful',
        token,
        user: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: 'admin'
        }
      });
    }

    // Check in users table
    const [users] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    const user = users[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Create JWT token for user
    const token = jwt.sign(
      { id: user.id, email: user.email, role: 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: 'user'
      }
    });

  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};

// Get User Profile Controller
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const userRole = req.user.role;

    let query, tableName;

    if (userRole === 'admin') {
      tableName = 'admins';
      query = 'SELECT id, name, email, role, created_at FROM admins WHERE id = ?';
    } else if (userRole === 'vendor') {
      tableName = 'vendors';
      query = 'SELECT id, business_name, owner_name, email, phone, business_type, city, is_approved, role, created_at FROM vendors WHERE id = ?';
    } else {
      tableName = 'users';
      query = 'SELECT id, name, email, role, created_at FROM users WHERE id = ?';
    }

    const [results] = await db.query(query, [userId]);

    if (results.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    res.status(200).json({
      success: true,
      user: results[0]
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
};
