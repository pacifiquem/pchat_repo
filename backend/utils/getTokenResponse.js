const cookie_parser = require('cookie-parser');

const Usermodel = require('../models/user-model');


const getTokenResponse = (user, statusCode, res) => {

    //get token
    const token = user.getJsonWebToken();

    //setting cookie options
    const cookie_options = {
        expiresIn: new Date(Date.now() + 2592000000),
        httpOnly: true
    };

    //sending response with cookie
    res
    .status(statusCode)
    .cookie('token', token, cookie_options)
    .json({
        success: true,
        data: token
    });
}


module.exports = getTokenResponse