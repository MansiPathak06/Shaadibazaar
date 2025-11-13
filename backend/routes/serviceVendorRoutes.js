const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET: All service vendors (with optional ?category=...)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = "SELECT * FROM service_vendors";
    let params = [];
    if (category) {
      query += " WHERE category = ?";
      params.push(category);
    }
    const [rows] = await db.query(query, params);
    res.json({ success: true, services: rows }); // Added success flag
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET: Single service vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM service_vendors WHERE id = ?", [req.params.id]);
    res.json({ vendor: rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM service_vendors WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete service" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { 
      name, 
      shortDescription, 
      longDescription, 
      category, 
      coverImage,
      price,
      workingSince,
      areaOfService,
      website,
      gallery,
       vendor_id

    } = req.body;

    const [result] = await db.query(
      `INSERT INTO service_vendors 
      (vendorName, shortDescription, longDescription, category, coverImage, price, workingSince, areaOfService, website, gallery, vendor_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
      [name, shortDescription, longDescription, category, coverImage, price, workingSince, areaOfService, website, gallery, vendor_id]
    );

    res.json({
      success: true,
      service: {
        id: result.insertId,
        vendorName: name,
        shortDescription,
        longDescription,
        category,
        coverImage,
        price,
        workingSince,
        areaOfService,
        website,
        gallery,
        vendor_id
      },
    });
  } catch (err) {
    console.error('Service insert error:', err);
    res.status(500).json({ success: false, message: "Failed to add service", error: err.message });
  }
});

// POST: Booking/contact for a vendor
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

// GET: All bookings for a specific vendor (authenticated)
router.get('/:id/bookings', async (req, res) => {
  try {
    const vendorId = req.params.id;
    
    const [bookings] = await db.query(
      `SELECT b.*, sv.vendorName 
       FROM service_bookings b 
       JOIN service_vendors sv ON b.service_vendor_id = sv.id 
       WHERE b.service_vendor_id = ? 
       ORDER BY b.created_at DESC`,
      [vendorId]
    );

    res.json({ success: true, bookings });
  } catch (err) {
    console.error('Fetch bookings error:', err);
    res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
});

// PUT: Update booking status
router.put('/bookings/:bookingId', async (req, res) => {
  try {
    const { status } = req.body;
    const { bookingId } = req.params;

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
