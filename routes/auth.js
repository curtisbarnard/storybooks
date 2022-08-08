const express = require('express');
const router = express.Router();
const passport = require('passport');

// Auth with Google
// GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// Google auth callback
// GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

module.exports = router;
