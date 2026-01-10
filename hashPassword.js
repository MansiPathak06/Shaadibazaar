const bcrypt = require('bcryptjs');

async function generateHash() {
  const plainPassword = '@Zentrix123'; // Use your actual password
  
  console.log('Plain password:', plainPassword);
  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  
  console.log('\n✅ Copy this hashed password:');
  console.log(hashedPassword);
  
  // Test comparison
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  console.log('\n✅ Test comparison result:', isMatch);
}

generateHash();
