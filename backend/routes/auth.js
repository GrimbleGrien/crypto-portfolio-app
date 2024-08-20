const express = require('express');
const router = express.Router();
const { authUser } = require('../controllers/auth');

// @route   POST /api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', authUser);

module.exports = router;
