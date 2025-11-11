// config/facebookStrategy.js
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const pool = require('./db'); // Change path to your db connection

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/facebook/callback",
    profileFields: ["id", "email", "name"] // Important for email and name!
  },
  async function(accessToken, refreshToken, profile, done) {
    // Find or create user logic here!
    // Example:
    const email = profile.emails?.[0]?.value || '';
    // Query your DB and call done(null, user) when found or created
    done(null, profile); // Basic: replace with real user object
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
