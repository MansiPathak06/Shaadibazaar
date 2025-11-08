const jwt = require('jsonwebtoken');
const db = require('../config/db');

const adminMiddleware = async (req, res, next) => {
  try {
    // 1. Extract token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided. Access denied.' 
      });
    }

    const token = authHeader.split(' ')[1]; // Get token after "Bearer "

    // 2. Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          success: false, 
          message: 'Token expired. Please login again.' 
        });
      }
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid token.' 
      });
    }

    // 3. Check if user exists in admins table
    const [admins] = await db.query(
      'SELECT id, name, email, role FROM admins WHERE email = ? AND role = ?',
      [decoded.email, 'admin']
    );

    if (admins.length === 0) {
      return res.status(403).json({ 
        success: false, 
        message: 'Access denied. Admin privileges required.' 
      });
    }

    // 4. Additional check for specific admin email (team.zentrixinfotech@gmail.com)
    if (decoded.email !== 'team.zentrixinfotech@gmail.com') {
      return res.status(403).json({ 
        success: false, 
        message: 'Unauthorized admin email.' 
      });
    }

    // 5. Attach admin info to request object for use in routes
    req.user = {
      id: admins[0].id,
      name: admins[0].name,
      email: admins[0].email,
      role: admins[0].role
    };
    
    req.admin = req.user; // Also available as req.admin
    
    // 6. Proceed to next middleware/route
    next();

  } catch (error) {
    console.error('Admin middleware error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error during authentication.' 
    });
  }
};

module.exports = adminMiddleware;
