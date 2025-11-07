const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

// Public routes (no authentication required)
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

// Protected routes (authentication required)
router.get('/profile', authMiddleware, authController.getProfile);

// --- Google OAuth routes ---
// Redirect user to Google for consent
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback url (called by Google after login)
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Auth successful, redirect to your frontend
    res.redirect('http://localhost:3000/auth?login=success');
  }
);

// --- Forgot Password Routes ---

// Request password reset
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const pool = require('../config/db');
    
    // Check if user exists
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'No account found with this email address' 
      });
    }

    const user = users[0];

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Store token in database
    await pool.query(
      'UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?',
      [resetToken, resetTokenExpiry, email]
    );

    // Create reset URL
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset - Shaadi Baazar',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #fb7185 0%, #f43f5e 100%); padding: 40px 30px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
            .content { padding: 40px 30px; }
            .content h2 { color: #1f2937; margin-top: 0; font-size: 24px; }
            .content p { color: #4b5563; line-height: 1.6; font-size: 16px; }
            .button { display: inline-block; padding: 14px 32px; background-color: #f43f5e; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; transition: background-color 0.3s; }
            .button:hover { background-color: #e11d48; }
            .footer { background-color: #f9fafb; padding: 30px; text-align: center; color: #6b7280; font-size: 14px; }
            .warning { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 6px; }
            .warning p { color: #92400e; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌸 Shaadi Baazar</h1>
            </div>
            <div class="content">
              <h2>Password Reset Request</h2>
              <p>Hi ${user.name || 'there'},</p>
              <p>We received a request to reset your password for your Shaadi Baazar account. Click the button below to create a new password:</p>
              <div style="text-align: center;">
                <a href="${resetUrl}" class="button">Reset My Password</a>
              </div>
              <div class="warning">
                <p><strong>⚠️ Important:</strong> This link will expire in 1 hour for security reasons.</p>
              </div>
              <p>If you didn't request this password reset, please ignore this email. Your password will remain unchanged.</p>
              <p style="margin-top: 30px; color: #9ca3af; font-size: 14px;">
                Or copy and paste this URL into your browser:<br>
                <span style="word-break: break-all;">${resetUrl}</span>
              </p>
            </div>
            <div class="footer">
              <p>© 2025 Shaadi Baazar. All rights reserved.</p>
              <p>This is an automated email, please do not reply.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Password reset email sent successfully. Please check your inbox.' 
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error sending password reset email. Please try again later.',
      error: error.message 
    });
  }
});

// Reset password with token
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const pool = require('../config/db');
    
    // Find user with valid token
    const [users] = await pool.query(
      'SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()',
      [token]
    );

    if (users.length === 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid or expired reset token. Please request a new password reset.' 
      });
    }

    const user = users[0];

    // Validate password length
    if (newPassword.length < 6) {
      return res.status(400).json({ 
        success: false,
        message: 'Password must be at least 6 characters long' 
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and clear reset token
    await pool.query(
      'UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?',
      [hashedPassword, user.id]
    );

    res.status(200).json({ 
      success: true,
      message: 'Password reset successfully! You can now log in with your new password.' 
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error resetting password. Please try again.',
      error: error.message 
    });
  }
});

module.exports = router;
