const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  contractAddress: {
    type: String,
    required: true,
  },
  decimals: {
    type: Number,
    required: true,
  },
  balance: {
    type: String,
    default: '0',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Token', TokenSchema);
