const express = require('express');
const router = express.Router();
const { listInfluencers, addInfluencer } = require('../controllers/influencerController');

// Get All Influencers
router.get('/', listInfluencers);

// Add New Influencer
router.post('/', addInfluencer);

module.exports = router;
