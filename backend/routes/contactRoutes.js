// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // npm install nodemailer

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/contact-vendor', async (req, res) => {
  try {
    const { name, email, phone, message, eventDate, serviceName, vendorEmail } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: vendorEmail,
      subject: `New Inquiry for ${serviceName}`,
      html: `
        <h2>New Service Inquiry</h2>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Failed to send inquiry' });
  }
});

module.exports = router;
