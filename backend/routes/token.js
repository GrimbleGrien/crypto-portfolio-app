const express = require('express');
const router = express.Router();
const { checkAllowance, transferTokens } = require('../controllers/token');

// @route   GET /api/tokens/allowance
// @desc    Check token allowance
// @access  Private
router.get('/allowance', checkAllowance);

// @route   POST /api/tokens/transfer
// @desc    Transfer tokens to another address
// @access  Private
router.post('/transfer', transferTokens);

module.exports = router;
