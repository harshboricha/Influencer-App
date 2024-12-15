const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Explicitly export the router
module.exports = router;
