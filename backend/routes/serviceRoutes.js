// backend/routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/authMiddleware');  // ← FIXED
const adminAuth = require('../middleware/adminMiddleware');  // ← FIXED

// Get all services (public)
router.get('/services', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = 'SELECT * FROM services WHERE 1=1';
    const params = [];
    
    if (category) {
      query += ' AND vendor_category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY featured DESC, created_at DESC';
    
    const [services] = await db.query(query, params);
    
    // Parse JSON fields
    services.forEach(service => {
      if (service.images) {
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

// Get single service with pricing (public)
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
    if (service.images) {
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

// Get services by category (public)
router.get('/services/category/:category', async (req, res) => {
  try {
    const [services] = await db.query(
      'SELECT * FROM services WHERE vendor_category = ? ORDER BY featured DESC, created_at DESC',
      [req.params.category]
    );
    
    services.forEach(service => {
      if (service.images) {
        try {
          service.images = JSON.parse(service.images);
        } catch (e) {
          service.images = [];
        }
      }
    });
    
    res.json({ success: true, services });
  } catch (error) {
    console.error('Get category services error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Create service
router.post('/admin/services', auth, adminAuth, async (req, res) => {
  try {
    const {
      vendor_category,
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
      featured,
      pricing
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO services (
        vendor_category, service_name, description, starting_price,
        working_since, area_of_service, male_female_unisex, staff_status,
        facilities, onsite_facility, timing_requirements, product_brand,
        other_services, payment_mode, website, contact_person,
        contact_email, contact_phone, address, images, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        vendor_category, service_name, description, starting_price,
        working_since, area_of_service, male_female_unisex, staff_status,
        facilities, onsite_facility, timing_requirements, product_brand,
        other_services, payment_mode, website, contact_person,
        contact_email, contact_phone, address, JSON.stringify(images), featured
      ]
    );

    const serviceId = result.insertId;

    // Insert pricing details
    if (pricing && pricing.length > 0) {
      const pricingValues = pricing.map(p => [serviceId, p.pricing_type, p.pricing_value]);
      await db.query(
        'INSERT INTO service_pricing (service_id, pricing_type, pricing_value) VALUES ?',
        [pricingValues]
      );
    }

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      serviceId
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Update service
router.put('/admin/services/:id', auth, adminAuth, async (req, res) => {
  try {
    const { pricing, ...serviceData } = req.body;
    
    if (serviceData.images) {
      serviceData.images = JSON.stringify(serviceData.images);
    }

    await db.query('UPDATE services SET ? WHERE id = ?', [serviceData, req.params.id]);

    // Update pricing
    if (pricing) {
      await db.query('DELETE FROM service_pricing WHERE service_id = ?', [req.params.id]);
      
      if (pricing.length > 0) {
        const pricingValues = pricing.map(p => [req.params.id, p.pricing_type, p.pricing_value]);
        await db.query(
          'INSERT INTO service_pricing (service_id, pricing_type, pricing_value) VALUES ?',
          [pricingValues]
        );
      }
    }

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
