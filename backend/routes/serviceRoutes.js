// backend/routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/authMiddleware');
const adminAuth = require('../middleware/adminMiddleware');

// ============= PUBLIC ROUTES =============

// Get all services (public)
router.get('/services', async (req, res) => {
  try {
    const { vendor_category, subCategory, featured } = req.query;
    
    let query = 'SELECT * FROM services WHERE 1=1';
    const params = [];
    
    if (vendor_category) {
      query += ' AND vendor_category = ?';
      params.push(vendor_category);
    }

    if (subCategory) {
      query += ' AND sub_category = ?';
      params.push(subCategory);
    }

    if (featured === 'true') {
      query += ' AND featured = 1';
    }
    
    query += ' ORDER BY featured DESC, created_at DESC';
    
    const [services] = await db.query(query, params);
    
    // Parse JSON fields
    services.forEach(service => {
      if (service.images && typeof service.images === 'string') {
        try {
          service.images = JSON.parse(service.images);
        } catch (e) {
          service.images = [];
        }
      }
    });
    
    res.json({ success: true, services });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get single service (public)
router.get('/services/:id', async (req, res) => {
  try {
    const [services] = await db.query(
      'SELECT * FROM services WHERE id = ?',
      [req.params.id]
    );
    
    if (services.length === 0) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    
    const service = services[0];
    if (service.images && typeof service.images === 'string') {
      try {
        service.images = JSON.parse(service.images);
      } catch (e) {
        service.images = [];
      }
    }
    
    // Get pricing details
    const [pricing] = await db.query(
      'SELECT * FROM service_pricing WHERE service_id = ?',
      [req.params.id]
    );
    
    service.pricing = pricing;
    
    res.json({ success: true, service });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ============= ADMIN ROUTES =============

// Admin: Get all services
router.get('/admin/services', auth, adminAuth, async (req, res) => {
  try {
    const [services] = await db.query(
      'SELECT * FROM services ORDER BY created_at DESC'
    );
    
    services.forEach(service => {
      if (service.images && typeof service.images === 'string') {
        try {
          service.images = JSON.parse(service.images);
        } catch (e) {
          service.images = [];
        }
      }
    });
    
    res.json({ success: true, services });
  } catch (error) {
    console.error('Admin get services error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Create service
router.post('/admin/services', auth, adminAuth, async (req, res) => {
  try {
    const {
      vendor_category,
      sub_category,
      service_name,
      description,
      starting_price,
      working_since,
      area_of_service,
      male_female_unisex,
      staff_status,
      facilities,
      onsite_facility,
      timing_requirements,
      product_brand,
      other_services,
      payment_mode,
      website,
      contact_person,
      contact_email,
      contact_phone,
      address,
      images,
      featured
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO services (
        vendor_category, sub_category, service_name, description, starting_price,
        working_since, area_of_service, male_female_unisex, staff_status,
        facilities, onsite_facility, timing_requirements, product_brand,
        other_services, payment_mode, website, contact_person,
        contact_email, contact_phone, address, images, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        vendor_category, sub_category, service_name, description, starting_price,
        working_since, area_of_service, male_female_unisex, staff_status,
        facilities, onsite_facility, timing_requirements, product_brand,
        other_services, payment_mode, website, contact_person,
        contact_email, contact_phone, address, 
        Array.isArray(images) ? JSON.stringify(images) : images,
        featured || 0
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      serviceId: result.insertId
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Update service
router.put('/admin/services/:id', auth, adminAuth, async (req, res) => {
  try {
    const { images, ...serviceData } = req.body;
    
    if (images) {
      serviceData.images = Array.isArray(images) ? JSON.stringify(images) : images;
    }

    await db.query('UPDATE services SET ? WHERE id = ?', [serviceData, req.params.id]);

    res.json({ success: true, message: 'Service updated successfully' });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Delete service
router.delete('/admin/services/:id', auth, adminAuth, async (req, res) => {
  try {
    await db.query('DELETE FROM services WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
