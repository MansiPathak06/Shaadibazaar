const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../config/db'); // Adjust path if needed

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/api/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;
    const name = profile.displayName;

    // Check if user exists by email
    const [rows] = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
    if (rows.length > 0) {
      return done(null, rows[0]);
    } else {
      // Insert new user WITHOUT avatar
      const [result] = await db.query(
        "INSERT INTO users (name, email, role) VALUES (?, ?, 'user')",
        [name, email]
      );
      const [newUserRows] = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [result.insertId]);
      return done(null, newUserRows[0]);
    }
  } catch (err) {
    return done(err, null);
  }
}));
