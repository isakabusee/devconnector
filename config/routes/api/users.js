const express = require('express');

const router = express.Router();

// @route Get api/users
// @desc Test route
// @access Public
// router.get('/', (req, res) => res.send('User route'))

router
    .route("/users")
    .get((req, res) => {
        // /users
        res.send("hi get index/users");
    })
    .post((req, res) => {
        res.send("hi post /index/users");
    });

router
    .route("/users/:id")
    .get((req,res) => {
        res.send("hi get index/users" + req.params.userid);
    })
    .put((req, res) => {
        res.send("hi put index/users" + req.params.userid);
    });

module.exports = router;

