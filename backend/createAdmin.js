const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function createAdmin() {
  try {
    // Database connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Connected to database');

    // Admin credentials
    const adminEmail = 'pathakmansi608@gmail.com';
    const adminPassword = 'admin123'; // Your password
    const adminName = 'Admin';

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    console.log('\n🔐 Password Hash Generated:');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);
    console.log('Hash:', hashedPassword);

    // Delete existing admin if exists
    await connection.query('DELETE FROM admins WHERE email = ?', [adminEmail]);
    console.log('\n🗑️ Deleted existing admin (if any)');

    // Insert new admin
    const [result] = await connection.query(
      'INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)',
      [adminName, adminEmail, hashedPassword, 'admin']
    );

    console.log('✅ Admin created successfully!');
    console.log('Admin ID:', result.insertId);
    
    console.log('\n📝 Login Credentials:');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);

    await connection.end();
    console.log('\n✅ Done! You can now login.');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createAdmin();
