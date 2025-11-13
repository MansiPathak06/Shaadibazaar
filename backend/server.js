const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const adminRoutes = require('./routes/adminRoutes'); // 👈 ADD THIS LINE
const productRoutes = require('./routes/productRoutes');
const passport = require('passport');
const session = require('express-session');
const vendorProductRoutes = require('./routes/vendorProductRoutes');
const orderRoutes = require('./routes/orderRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');




require('./config/googleStrategy');
require('./config/facebookStrategy');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'abcdefghijklmnopqrstuvwxyz',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vendor', vendorRoutes);
app.use('/api/admin', adminRoutes); // 👈 ADD THIS LINE
app.use('/api/products', productRoutes);
app.use('/api/vendor/products', vendorProductRoutes);

app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/service-vendors', require('./routes/serviceVendorRoutes'));

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Shaadi Baazar API is running!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      vendor: '/api/vendor',
      admin: '/api/admin' // 👈 ADD THIS
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}/`);
  console.log(`✅ Admin routes: /api/admin/*`); // 👈 ADD THIS
});
