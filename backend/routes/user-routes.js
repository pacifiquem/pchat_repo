const express = require('express');
const dotenv = require('dotenv').config({path: '../config/config.env'});
const user_controllers = require('../controllers/user-controller');
const router = express.Router();

const {
    signUp,
    login
    } = require('../controllers/user-controller');

router
    .route('/signup')
    .post(signUp);

    router
    .route('/login')
    .post(login);


module.exports = router;