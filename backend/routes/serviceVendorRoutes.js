const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// GET: All service vendors for authenticated vendor (with optional ?category=...)
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
    res.json({ success: true, services: rows }); // Only this vendor's services
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: Single service vendor by ID, only if owned by vendor
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

// DELETE: Only delete if owned by vendor
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

// POST: Add new service for this vendor only
router.post("/", async (req, res) => {
  try {
    const vendor_id = req.user.id; // Always use authenticated vendor, ignore body.vendor_id
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

// POST: Booking/contact for a vendor (public, no vendor auth required)
router.post('/:id/booking', async (req, res) => {
  try {
    const { name, email, phone, event_date, details } = req.body;
    const vendorId = req.params.id;
    const [result] = await db.query(
      `INSERT INTO service_bookings 
      (service_vendor_id, customer_name, customer_email, customer_phone, event_date, details) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [vendorId, name, email, phone, event_date, details]
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

// GET: All bookings for this vendor's services (authenticated vendor only)
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

// PUT: Update booking status (vendor can only update their service's booking)
router.put('/bookings/:bookingId', async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { bookingId } = req.params;
    // Ensure this booking is for a service owned by this vendor
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
