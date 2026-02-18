const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'wedding_planning_tools',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Wedding Tools DB failed:', err.message);
    return;
  }
  console.log('✅ Wedding Tools DB connected!');
  connection.release();
});

module.exports = promisePool;
