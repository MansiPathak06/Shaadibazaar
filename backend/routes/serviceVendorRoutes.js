const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ PUBLIC ROUTE - Browse all services (no auth required)
router.get('/public', async (req, res) => {
  try {
    const { category } = req.query;
    let query = "SELECT * FROM service_vendors";
    let params = [];
    
    if (category && category !== 'all') {
      query += " WHERE category = ?";
      params.push(category);
    }
    
    const [rows] = await db.query(query, params);
    res.json({ success: true, services: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ PUBLIC ROUTE - Get single service details (no auth required)
router.get('/public/:id', async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM service_vendors WHERE id = ?",
      [req.params.id]
    );
    res.json({ success: true, vendor: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ PUBLIC ROUTE - Submit booking (no auth required)
router.post('/public/:id/booking', async (req, res) => {
  try {
    const { name, email, phone, event_date, details } = req.body;
    const serviceId = req.params.id;
    const [result] = await db.query(
      `INSERT INTO service_bookings 
      (service_vendor_id, customer_name, customer_email, customer_phone, event_date, details) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [serviceId, name, email, phone, event_date, details]
    );
    res.json({ 
      success: true, 
      message: "Booking request sent successfully!",
      bookingId: result.insertId 
    });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ success: false, message: "Failed to submit booking request" });
  }
});

// 🔒 Apply authentication ONLY to vendor management routes below
router.use(authMiddleware);

// 🔒 PRIVATE ROUTE - Vendor's own services
router.get('/', async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { category } = req.query;
    let query = "SELECT * FROM service_vendors WHERE vendor_id = ?";
    let params = [vendorId];
    if (category) {
      query += " AND category = ?";
      params.push(category);
    }
    const [rows] = await db.query(query, params);
    res.json({ success: true, services: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🔒 PRIVATE ROUTE - Get vendor's single service
router.get('/:id', async (req, res) => {
  try {
    const vendorId = req.user.id;
    const [rows] = await db.query(
      "SELECT * FROM service_vendors WHERE id = ? AND vendor_id = ?",
      [req.params.id, vendorId]
    );
    res.json({ vendor: rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔒 PRIVATE ROUTE - Delete service
router.delete("/:id", async (req, res) => {
  try {
    const vendorId = req.user.id;
    const [result] = await db.query(
      "DELETE FROM service_vendors WHERE id = ? AND vendor_id = ?",
      [req.params.id, vendorId]
    );
    if (result.affectedRows === 0) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete service" });
  }
});

// 🔒 PRIVATE ROUTE - Add new service
router.post("/", async (req, res) => {
  try {
    const vendor_id = req.user.id;
    const { 
      name, shortDescription, longDescription, 
      category, coverImage, price, workingSince, 
      areaOfService, website, gallery
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO service_vendors 
      (vendorName, shortDescription, longDescription, category, coverImage, price, workingSince, areaOfService, website, gallery, vendor_id) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, shortDescription, longDescription, category, coverImage, price, workingSince, areaOfService, website, gallery, vendor_id]
    );

    res.json({
      success: true,
      service: {
        id: result.insertId,
        vendorName: name,
        shortDescription, longDescription, category, coverImage,
        price, workingSince, areaOfService, website, gallery, vendor_id
      },
    });
  } catch (err) {
    console.error('Service insert error:', err);
    res.status(500).json({ success: false, message: "Failed to add service", error: err.message });
  }
});

// 🔒 PRIVATE ROUTE - Get vendor's bookings
router.get('/my/bookings', async (req, res) => {
  try {
    const vendorId = req.user.id;
    const [bookings] = await db.query(
      `SELECT b.*, sv.vendorName 
         FROM service_bookings b 
         JOIN service_vendors sv ON b.service_vendor_id = sv.id 
         WHERE sv.vendor_id = ?
         ORDER BY b.created_at DESC`,
      [vendorId]
    );
    res.json({ success: true, bookings });
  } catch (err) {
    console.error('Fetch bookings error:', err);
    res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
});

// 🔒 PRIVATE ROUTE - Update booking status
router.put('/bookings/:bookingId', async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { bookingId } = req.params;
    const [rows] = await db.query(
      `SELECT b.* FROM service_bookings b
         JOIN service_vendors sv ON b.service_vendor_id = sv.id
         WHERE b.id = ? AND sv.vendor_id = ?`,
      [bookingId, vendorId]
    );
    if (!rows.length) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }
    const { status } = req.body;
    await db.query(
      "UPDATE service_bookings SET status = ? WHERE id = ?", 
      [status, bookingId]
    );
    res.json({ success: true, message: "Booking status updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update status" });
  }
});

module.exports = router;