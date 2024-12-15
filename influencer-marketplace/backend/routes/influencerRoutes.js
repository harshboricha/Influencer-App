const express = require('express');
const router = express.Router();
const {
  getAllInfluencers,
  getInfluencer,
  createInfluencer,
  updateInfluencer,
  deleteInfluencer,
} = require('../controllers/influencerController');

// GET all influencers
router.route('/').get(getAllInfluencers);
console.log("heya")
// GET single influencer, POST new influencer
router.route('/:id').get(getInfluencer).put(updateInfluencer).delete(deleteInfluencer);

module.exports = router;
