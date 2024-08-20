const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  token: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Token',
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  transactionHash: {
    type: String,
    unique: true,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
