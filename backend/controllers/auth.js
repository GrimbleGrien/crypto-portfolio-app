const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, walletAddress: user.walletAddress }, config.jwtSecret, {
    expiresIn: '1h',
  });
};

// @desc    Register or Login User
// @route   POST /api/auth
// @access  Public
const authUser = async (req, res) => {
  const { walletAddress } = req.body;

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = new User({ walletAddress });
      await user.save();
    }

    const token = generateToken(user);

    res.json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { authUser };
