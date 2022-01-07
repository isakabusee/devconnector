const express = require('express');

const router = express.Router();

// @route Get api/profile
// @desc Test route
// @access Public
router.get('/api/profile', (req, res) => res.send('Profile route'))

module.exports = router;