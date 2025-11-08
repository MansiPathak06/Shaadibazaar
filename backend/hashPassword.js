const bcrypt = require('bcrypt');

const password = 'zentrix123'; // Change this to your desired password

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Hashed Password:', hash);
    console.log('\nCopy this hash and use it in phpMyAdmin');
  }
});
