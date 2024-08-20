const User = require('../models/user');
const Token = require('../models/token');
const axios = require('axios');

// @desc    Add Token to Watchlist
// @route   POST /api/portfolio/add-token
// @access  Private
const addTokenToWatchlist = async (req, res) => {
  const { walletAddress, tokenData } = req.body;

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = new User({ walletAddress });
      await user.save();
    }

    const token = new Token({ ...tokenData, user: user._id });
    await token.save();

    user.tokens.push(token._id);
    await user.save();

    res.json({ success: true, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get User's Watchlist
// @route   GET /api/portfolio/watchlist
// @access  Private
const getWatchlist = async (req, res) => {
  const { walletAddress } = req.query;

  try {
    const user = await User.findOne({ walletAddress }).populate('tokens');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json({ tokens: user.tokens });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Fetch Historical Data for Token
// @route   GET /api/portfolio/historical-data
// @access  Private
const getHistoricalData = async (req, res) => {
  const { contractAddress, startDate, endDate } = req.query;

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/contract/${contractAddress}/market_chart/range`, {
      params: {
        vs_currency: 'usd',
        from: startDate,
        to: endDate,
      },
    });

    const historicalData = response.data;

    res.json(historicalData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { addTokenToWatchlist, getWatchlist, getHistoricalData };
