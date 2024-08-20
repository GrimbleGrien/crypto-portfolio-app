const express = require('express');
const router = express.Router();
const { addTokenToWatchlist, getWatchlist, getHistoricalData } = require('../controllers/portfolio');

// @route   POST /api/portfolio/add-token
// @desc    Add token to user's watchlist
// @access  Private
router.post('/add-token', addTokenToWatchlist);

// @route   GET /api/portfolio/watchlist
// @desc    Get user's watchlist
// @access  Private
router.get('/watchlist', getWatchlist);

// @route   GET /api/portfolio/historical-data
// @desc    Get historical data for a token
// @access  Private
router.get('/historical-data', getHistoricalData);

module.exports = router;
