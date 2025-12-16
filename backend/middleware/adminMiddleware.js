const jwt = require('jsonwebtoken');
const db = require('../config/db');

const adminMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ CHANGE: Query the 'admins' table instead of 'users'
    const [admins] = await db.query(
      'SELECT id, name, email, role FROM admins WHERE email = ?',
      [decoded.email]
    );

    if (admins.length === 0 || admins[0].role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    req.user = admins[0];
    req.admin = admins[0];
    next();
  } catch (err) {
    console.error('Admin middleware error:', err);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

module.exports = adminMiddleware;
