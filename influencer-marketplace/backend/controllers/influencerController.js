// controllers/influencerController.js

const Influencer = require('../models/Influencer');

// @desc    Get all influencers
// @route   GET /api/influencers
// @access  Public
exports.getAllInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.json(influencers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single influencer
// @route   GET /api/influencers/:id
// @access  Public
exports.getInfluencer = async (req, res) => {
  try {
    const influencer = await Influencer.findById(req.params.id);
    if (!influencer) {
      return res.status(404).json({ message: 'Influencer not found' });
    }
    res.json(influencer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new influencer
// @route   POST /api/influencers
// @access  Private (requires authentication)
exports.createInfluencer = async (req, res) => {
  const { name, description, packages } = req.body;
  const influencer = new Influencer({ name, description, packages });

  try {
    const newInfluencer = await influencer.save();
    res.status(201).json(newInfluencer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update influencer
// @route   PUT /api/influencers/:id
// @access  Private (requires authentication)
exports.updateInfluencer = async (req, res) => {
  try {
    const updatedInfluencer = await Influencer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedInfluencer) {
      return res.status(404).json({ message: 'Influencer not found' });
    }
    res.json(updatedInfluencer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete influencer
// @route   DELETE /api/influencers/:id
// @access  Private (requires authentication)
exports.deleteInfluencer = async (req, res) => {
  try {
    const deletedInfluencer = await Influencer.findByIdAndDelete(req.params.id);
    if (!deletedInfluencer) {
      return res.status(404).json({ message: 'Influencer not found' });
    }
    res.status(204).json({ message: 'Influencer deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
