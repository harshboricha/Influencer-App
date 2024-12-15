const express = require('express');
const router = express.Router();
const { listClients, addClient } = require('../controllers/clientController');

// Get All Clients
router.get('/', listClients);

// Add New Client
router.post('/', addClient);

module.exports = router;
