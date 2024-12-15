const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  niche: {
    type: String,
    required: true,
    trim: true,
  },
  packages: [{
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  }],
  followers: {
    type: Number,
    required: true,
    min: 0,
  },
  engagementRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Influencer', influencerSchema);
