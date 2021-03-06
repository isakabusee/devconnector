const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User')

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], 
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    res.send('User route');
});

module.exports = router;

