// routes/userRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();
