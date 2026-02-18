// controllers/vendorToolsController.js
// Handles vendors + travel logistics CRUD

const db = require('../config/weddingToolsDb');

/* ───────────────────────────── VENDORS ───────────────────────────── */

// GET /api/wedding-tools/vendors
const getVendors = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM vendors WHERE user_id = ? ORDER BY created_at ASC',
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getVendors error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/vendors
const addVendor = async (req, res) => {
    try {
        const { name, type, status } = req.body;

        if (!name || !type) {
            return res.status(400).json({
                success: false,
                message: 'Vendor name and type are required.'
            });
        }

        const [result] = await db.query(
            `INSERT INTO vendors (user_id, name, type, status)
             VALUES (?, ?, ?, ?)`,
            [req.user.id, name, type, status || 'Contracted']
        );

        const [rows] = await db.query(
            'SELECT * FROM vendors WHERE id = ?',
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: 'Vendor added.',
            data: rows[0]
        });
    } catch (error) {
        console.error('addVendor error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// PATCH /api/wedding-tools/vendors/:id/status
const updateVendorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowed = ['Contracted', 'Paid', 'Pending', 'Cancelled'];
        if (!allowed.includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status value.' });
        }

        const [result] = await db.query(
            'UPDATE vendors SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?',
            [status, id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Vendor not found.' });
        }

        res.json({ success: true, message: 'Vendor status updated.', data: { id: parseInt(id), status } });
    } catch (error) {
        console.error('updateVendorStatus error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE /api/wedding-tools/vendors/:id
const deleteVendor = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM vendors WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Vendor not found.' });
        }

        res.json({ success: true, message: 'Vendor removed.' });
    } catch (error) {
        console.error('deleteVendor error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

/* ─────────────────────────── TRAVEL DETAILS ─────────────────────────── */

// GET /api/wedding-tools/travel
const getTravelDetails = async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT id, guest, mode,
                    TIME_FORMAT(travel_time, '%H:%i') AS time,
                    status, created_at
             FROM travel_details
             WHERE user_id = ?
             ORDER BY travel_time ASC`,
            [req.user.id]
        );
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error('getTravelDetails error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// POST /api/wedding-tools/travel
const addTravelDetail = async (req, res) => {
    try {
        const { guest, mode, time, status } = req.body;

        if (!guest || !mode || !time) {
            return res.status(400).json({
                success: false,
                message: 'Guest name, mode, and time are required.'
            });
        }

        const [result] = await db.query(
            `INSERT INTO travel_details (user_id, guest, mode, travel_time, status)
             VALUES (?, ?, ?, ?, ?)`,
            [req.user.id, guest, mode, time, status || 'Scheduled']
        );

        const [rows] = await db.query(
            `SELECT id, guest, mode,
                    TIME_FORMAT(travel_time, '%H:%i') AS time,
                    status
             FROM travel_details WHERE id = ?`,
            [result.insertId]
        );

        res.status(201).json({
            success: true,
            message: 'Travel detail added.',
            data: rows[0]
        });
    } catch (error) {
        console.error('addTravelDetail error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE /api/wedding-tools/travel/:id
const deleteTravelDetail = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM travel_details WHERE id = ? AND user_id = ?',
            [id, req.user.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Travel detail not found.' });
        }

        res.json({ success: true, message: 'Travel detail removed.' });
    } catch (error) {
        console.error('deleteTravelDetail error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = {
    getVendors, addVendor, updateVendorStatus, deleteVendor,
    getTravelDetails, addTravelDetail, deleteTravelDetail
};