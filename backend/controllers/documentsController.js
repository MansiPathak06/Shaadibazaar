const db = require('../config/weddingToolsDb');

// ─── CREATE DOCUMENTS TABLE IF NOT EXISTS ───────────────────────────────────
const initTable = async () => {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS shadi_bazar_documents (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      vendor VARCHAR(255),
      category ENUM('Venue','Catering','Photography','Decor','Legal','Other') DEFAULT 'Other',
      contract_date DATE,
      expiry_date DATE,
      notes TEXT,
      file_name VARCHAR(255),
      file_type VARCHAR(100),
      file_size BIGINT,
      upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_user_id (user_id),
      INDEX idx_expiry_date (expiry_date)
    )
  `);
};

initTable().catch(console.error);

// ─── GET ALL DOCUMENTS FOR USER ──────────────────────────────────────────────
const getAllDocuments = async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await db.execute(
      `SELECT 
        id,
        user_id,
        title,
        vendor,
        category,
        contract_date AS contractDate,
        expiry_date AS expiryDate,
        notes,
        file_name AS fileName,
        file_type AS fileType,
        file_size AS fileSize,
        upload_date AS uploadDate
       FROM shadi_bazar_documents
       WHERE user_id = ?
       ORDER BY upload_date DESC`,
      [userId]
    );

    res.json({ success: true, documents: rows });
  } catch (error) {
    console.error('getAllDocuments error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch documents' });
  }
};

// ─── GET SINGLE DOCUMENT ─────────────────────────────────────────────────────
const getDocument = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [rows] = await db.execute(
      `SELECT 
        id, user_id, title, vendor, category,
        contract_date AS contractDate,
        expiry_date AS expiryDate,
        notes, file_name AS fileName, file_type AS fileType,
        file_size AS fileSize, upload_date AS uploadDate
       FROM shadi_bazar_documents
       WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }

    res.json({ success: true, document: rows[0] });
  } catch (error) {
    console.error('getDocument error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch document' });
  }
};

// ─── CREATE DOCUMENT ─────────────────────────────────────────────────────────
const createDocument = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      title,
      vendor,
      category,
      contractDate,
      expiryDate,
      notes,
      fileName,
      fileType,
      fileSize
    } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }

    const [result] = await db.execute(
      `INSERT INTO shadi_bazar_documents
        (user_id, title, vendor, category, contract_date, expiry_date, notes, file_name, file_type, file_size)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        title,
        vendor || null,
        category || 'Other',
        contractDate || null,
        expiryDate || null,
        notes || null,
        fileName || null,
        fileType || null,
        fileSize || null
      ]
    );

    const [newDoc] = await db.execute(
      `SELECT 
        id, user_id, title, vendor, category,
        contract_date AS contractDate,
        expiry_date AS expiryDate,
        notes, file_name AS fileName, file_type AS fileType,
        file_size AS fileSize, upload_date AS uploadDate
       FROM shadi_bazar_documents WHERE id = ?`,
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      message: 'Document uploaded successfully',
      document: newDoc[0]
    });
  } catch (error) {
    console.error('createDocument error:', error);
    res.status(500).json({ success: false, message: 'Failed to create document' });
  }
};

// ─── UPDATE DOCUMENT ─────────────────────────────────────────────────────────
const updateDocument = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { title, vendor, category, contractDate, expiryDate, notes } = req.body;

    const [existing] = await db.execute(
      'SELECT id FROM shadi_bazar_documents WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }

    await db.execute(
      `UPDATE shadi_bazar_documents
       SET title = ?, vendor = ?, category = ?, contract_date = ?, expiry_date = ?, notes = ?
       WHERE id = ? AND user_id = ?`,
      [title, vendor || null, category, contractDate || null, expiryDate || null, notes || null, id, userId]
    );

    const [updated] = await db.execute(
      `SELECT 
        id, user_id, title, vendor, category,
        contract_date AS contractDate,
        expiry_date AS expiryDate,
        notes, file_name AS fileName, file_type AS fileType,
        file_size AS fileSize, upload_date AS uploadDate
       FROM shadi_bazar_documents WHERE id = ?`,
      [id]
    );

    res.json({ success: true, message: 'Document updated', document: updated[0] });
  } catch (error) {
    console.error('updateDocument error:', error);
    res.status(500).json({ success: false, message: 'Failed to update document' });
  }
};

// ─── DELETE DOCUMENT ─────────────────────────────────────────────────────────
const deleteDocument = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [result] = await db.execute(
      'DELETE FROM shadi_bazar_documents WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }

    res.json({ success: true, message: 'Document deleted successfully' });
  } catch (error) {
    console.error('deleteDocument error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete document' });
  }
};

// ─── GET DASHBOARD STATS ─────────────────────────────────────────────────────
const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date().toISOString().split('T')[0];
    const thirtyDaysLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

    const [[{ total }]] = await db.execute(
      'SELECT COUNT(*) AS total FROM shadi_bazar_documents WHERE user_id = ?', [userId]
    );
    const [[{ expiringSoon }]] = await db.execute(
      `SELECT COUNT(*) AS expiringSoon FROM shadi_bazar_documents
       WHERE user_id = ? AND expiry_date IS NOT NULL AND expiry_date >= ? AND expiry_date <= ?`,
      [userId, today, thirtyDaysLater]
    );
    const [[{ expired }]] = await db.execute(
      `SELECT COUNT(*) AS expired FROM shadi_bazar_documents
       WHERE user_id = ? AND expiry_date IS NOT NULL AND expiry_date < ?`,
      [userId, today]
    );
    const [[{ thisMonth }]] = await db.execute(
      `SELECT COUNT(*) AS thisMonth FROM shadi_bazar_documents WHERE user_id = ? AND upload_date >= ?`,
      [userId, firstOfMonth]
    );

    res.json({ success: true, stats: { total, expiringSoon, expired, thisMonth } });
  } catch (error) {
    console.error('getDashboardStats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch stats' });
  }
};

module.exports = { getAllDocuments, getDocument, createDocument, updateDocument, deleteDocument, getDashboardStats };