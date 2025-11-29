const db = require('../config/db');

// ==================== DASHBOARD STATS ====================
exports.getStats = async (req, res) => {
  try {
    const [productCount] = await db.query('SELECT COUNT(*) as count FROM products');
    const [userCount] = await db.query('SELECT COUNT(*) as count FROM users');
    const [vendorCount] = await db.query('SELECT COUNT(*) as count FROM vendors');
    const [pendingVendors] = await db.query('SELECT COUNT(*) as count FROM vendors WHERE is_approved = 0');
    
    res.json({
      success: true,
      stats: {
        totalProducts: productCount[0].count,
        totalUsers: userCount[0].count,
        totalVendors: vendorCount[0].count,
        pendingVendors: pendingVendors[0].count
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==================== PRODUCTS CRUD ====================
exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query(`
      SELECT p.*, v.business_name as vendor_name, v.email as vendor_email 
      FROM products p 
      LEFT JOIN vendors v ON p.vendor_id = v.id 
      ORDER BY p.created_at DESC
    `);
    
    // Parse images JSON if it's stored as string
    const productsWithParsedImages = products.map(product => ({
      ...product,
      images: typeof product.images === 'string' ? JSON.parse(product.images) : product.images
    }));
    
    res.json({ success: true, products: productsWithParsedImages });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const [products] = await db.query(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );
    
    if (products.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    // Parse images
    const product = {
      ...products[0],
      images: typeof products[0].images === 'string' ? JSON.parse(products[0].images) : products[0].images
    };
    
    res.json({ success: true, product });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, mrp, discount, rating, category, subCategory, images, vendor_id, stock, featured } = req.body;
    
    // Validate required fields
    if (!name || !description || !price || !category || !mrp) {
      return res.status(400).json({
        success: false,
        message: 'Name, description, price, MRP, and category are required'
      });
    }
    
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, mrp, discount, rating, category,subCategory, images, vendor_id, stock, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        name, 
        description, 
        price,
        mrp || price,
        discount || 0,
        rating || 0, 
        category, 
         subCategory || null, 
        JSON.stringify(images || []), 
        vendor_id || null,
        stock || 0,
        featured ? 1 : 0
      ]
    );
    
    res.json({ 
      success: true, 
      message: 'Product created successfully',
      productId: result.insertId
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, rating, category, subCategory, images, vendor_id } = req.body;
    
    const [result] = await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, rating = ?, category = ?, subCategory = ?, images = ?, vendor_id = ? WHERE id = ?',
      [
        name, 
        description, 
        price, 
        rating, 
        category,
        subCategory || null,
        JSON.stringify(images || []), 
        vendor_id, 
        req.params.id
      ]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Product updated successfully' 
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM products WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Product deleted successfully' 
    });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==================== USERS CRUD ====================
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query(
      'SELECT id, name, email, role, created_at, updated_at FROM users ORDER BY created_at DESC'
    );
    res.json({ success: true, users });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const [users] = await db.query(
      'SELECT id, name, email, role, created_at, updated_at FROM users WHERE id = ?',
      [req.params.id]
    );
    
    if (users.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.json({ success: true, user: users[0] });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM users WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'User deleted successfully' 
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ==================== BULK IMPORT PRODUCTS ====================
exports.bulkImportProducts = async (req, res) => {
  try {
    const products = req.body.products; // Array of products from Excel
    
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No products data provided'
      });
    }

    const insertedProducts = [];
    const errors = [];

    // Insert each product
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      
      try {
        // Validate required fields
        if (!product.name || !product.category || !product.price) {
          errors.push({
            row: i + 2, // Excel row (1 is header)
            error: 'Missing required fields (name, category, price)'
          });
          continue;
        }

        // Parse images (can be comma-separated URLs)
        let images = [];
        if (product.images) {
          if (typeof product.images === 'string') {
            images = product.images.split(',').map(img => img.trim());
          } else if (Array.isArray(product.images)) {
            images = product.images;
          }
        }

        // Insert into database
        const [result] = await db.query(
          'INSERT INTO products (name, description, price, mrp, discount, rating, category,subCategory , images, vendor_id, stock, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            product.name,
            product.description || '',
            product.price,
            product.mrp || product.price,
            product.discount || 0,
            product.rating || 0,
            product.category,
            product.subCategory || null,
            JSON.stringify(images),
            product.vendor_id || null,
            product.stock || 0,
            product.featured ? 1 : 0
          ]
        );

        insertedProducts.push({
          id: result.insertId,
          name: product.name
        });
      } catch (error) {
        errors.push({
          row: i + 2,
          name: product.name,
          error: error.message
        });
      }
    }

    res.json({
      success: true,
      message: `Successfully imported ${insertedProducts.length} products`,
      imported: insertedProducts.length,
      failed: errors.length,
      products: insertedProducts,
      errors: errors
    });
  } catch (error) {
    console.error('Bulk import error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// ==================== DOWNLOAD TEMPLATE ====================
exports.downloadTemplate = async (req, res) => {
  try {
    const templateData = {
      headers: [
        'name',
        'description',
        'price',
        'mrp',
        'discount',
        'rating',
        'category',
        'images',
        'stock',
        'featured',
        'vendor_id'
      ],
      example: [
        'Premium Diamond Necklace',
        'Exquisite diamond necklace with 18k gold',
        '250000',
        '300000',
        '17',
        '4.8',
        'jewellery',
        'https://res.cloudinary.com/image1.jpg, https://res.cloudinary.com/image2.jpg',
        '50',
        '1',
        ''
      ]
    };

    res.json({
      success: true,
      template: templateData
    });
  } catch (error) {
    console.error('Template download error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};



// ==================== VENDORS CRUD ====================
exports.getAllVendors = async (req, res) => {
  try {
    const [vendors] = await db.query(
      `SELECT id, business_name, owner_name, email, phone, business_type, 
       address, city, state, pincode, is_approved, role, created_at, updated_at 
       FROM vendors ORDER BY created_at DESC`
    );
    res.json({ success: true, vendors });
  } catch (error) {
    console.error('Get vendors error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getVendorById = async (req, res) => {
  try {
    const [vendors] = await db.query(
      `SELECT id, business_name, owner_name, email, phone, business_type, 
       address, city, state, pincode, is_approved, role, created_at, updated_at 
       FROM vendors WHERE id = ?`,
      [req.params.id]
    );
    
    if (vendors.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Vendor not found' 
      });
    }
    
    res.json({ success: true, vendor: vendors[0] });
  } catch (error) {
    console.error('Get vendor error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.approveVendor = async (req, res) => {
  try {
    const { is_approved } = req.body;
    
    const [result] = await db.query(
      'UPDATE vendors SET is_approved = ? WHERE id = ?',
      [is_approved ? 1 : 0, req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Vendor not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: `Vendor ${is_approved ? 'approved' : 'rejected'} successfully` 
    });
  } catch (error) {
    console.error('Approve vendor error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    // First, set vendor_id to NULL for all products of this vendor
    await db.query(
      'UPDATE products SET vendor_id = NULL WHERE vendor_id = ?',
      [req.params.id]
    );
    
    // Then delete the vendor
    const [result] = await db.query(
      'DELETE FROM vendors WHERE id = ?',
      [req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Vendor not found' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Vendor deleted successfully' 
    });
  } catch (error) {
    console.error('Delete vendor error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
