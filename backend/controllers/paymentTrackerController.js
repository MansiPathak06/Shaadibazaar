const db = require('../config/weddingToolsDb');

// GET all vendors/payments for logged-in user
const getPayments = async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await db.execute(
      'SELECT * FROM payment_tracker WHERE user_id = ? ORDER BY due_date ASC',
      [userId]
    );
    // Convert snake_case DB fields to camelCase for frontend
    const vendors = rows.map(mapRowToVendor);
    res.json({ success: true, data: vendors });
  } catch (err) {
    console.error('getPayments error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch payments' });
  }
};

// POST create new payment
const createPayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, category, totalAmount, depositAmount, amountPaid, dueDate, status, notes } = req.body;

    if (!name || !category || totalAmount === undefined || !dueDate) {
      return res.status(400).json({ success: false, message: 'name, category, totalAmount, and dueDate are required' });
    }

    const [result] = await db.execute(
      `INSERT INTO payment_tracker 
        (user_id, name, category, total_amount, deposit_amount, amount_paid, due_date, status, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        name,
        category,
        parseFloat(totalAmount) || 0,
        parseFloat(depositAmount) || 0,
        parseFloat(amountPaid) || 0,
        dueDate,
        status || 'Pending',
        notes || ''
      ]
    );

    const [newRow] = await db.execute('SELECT * FROM payment_tracker WHERE id = ?', [result.insertId]);
    res.status(201).json({ success: true, data: mapRowToVendor(newRow[0]) });
  } catch (err) {
    console.error('createPayment error:', err);
    res.status(500).json({ success: false, message: 'Failed to create payment' });
  }
};

// PUT update existing payment
const updatePayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { name, category, totalAmount, depositAmount, amountPaid, dueDate, status, notes } = req.body;

    // Verify ownership
    const [existing] = await db.execute(
      'SELECT * FROM payment_tracker WHERE id = ? AND user_id = ?',
      [id, userId]
    );
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }

    await db.execute(
      `UPDATE payment_tracker 
       SET name=?, category=?, total_amount=?, deposit_amount=?, amount_paid=?, due_date=?, status=?, notes=?, updated_at=NOW()
       WHERE id = ? AND user_id = ?`,
      [
        name,
        category,
        parseFloat(totalAmount) || 0,
        parseFloat(depositAmount) || 0,
        parseFloat(amountPaid) || 0,
        dueDate,
        status || 'Pending',
        notes || '',
        id,
        userId
      ]
    );

    const [updatedRow] = await db.execute('SELECT * FROM payment_tracker WHERE id = ?', [id]);
    res.json({ success: true, data: mapRowToVendor(updatedRow[0]) });
  } catch (err) {
    console.error('updatePayment error:', err);
    res.status(500).json({ success: false, message: 'Failed to update payment' });
  }
};

// PATCH mark payment as fully paid
const markAsPaid = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [existing] = await db.execute(
      'SELECT * FROM payment_tracker WHERE id = ? AND user_id = ?',
      [id, userId]
    );
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }

    const vendor = existing[0];
    await db.execute(
      `UPDATE payment_tracker SET amount_paid=?, status='Paid', updated_at=NOW() WHERE id = ? AND user_id = ?`,
      [vendor.total_amount, id, userId]
    );

    const [updatedRow] = await db.execute('SELECT * FROM payment_tracker WHERE id = ?', [id]);
    res.json({ success: true, data: mapRowToVendor(updatedRow[0]) });
  } catch (err) {
    console.error('markAsPaid error:', err);
    res.status(500).json({ success: false, message: 'Failed to mark as paid' });
  }
};

// DELETE payment
const deletePayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [existing] = await db.execute(
      'SELECT * FROM payment_tracker WHERE id = ? AND user_id = ?',
      [id, userId]
    );
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Payment not found' });
    }

    await db.execute('DELETE FROM payment_tracker WHERE id = ? AND user_id = ?', [id, userId]);
    res.json({ success: true, message: 'Payment deleted successfully' });
  } catch (err) {
    console.error('deletePayment error:', err);
    res.status(500).json({ success: false, message: 'Failed to delete payment' });
  }
};

// Helper: map DB row (snake_case) → frontend object (camelCase)
const mapRowToVendor = (row) => ({
  id: String(row.id),
  name: row.name,
  category: row.category,
  totalAmount: parseFloat(row.total_amount),
  depositAmount: parseFloat(row.deposit_amount),
  amountPaid: parseFloat(row.amount_paid),
  dueDate: row.due_date instanceof Date
    ? row.due_date.toISOString().split('T')[0]
    : row.due_date,
  status: row.status,
  notes: row.notes || '',
});

module.exports = { getPayments, createPayment, updatePayment, markAsPaid, deletePayment };