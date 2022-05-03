const cookie_parser = require('cookie-parser');

const Usermodel = require('../models/user-model');


const getTokenResponse = (user, statusCode, res) => {

    //get token
    const token = user.getTokenResponse();

    //setting cookie options
    const cookie_options = {
        expiresIn: new Date(Date.now() + 2592000000),
        httpOnly: true
    };

    console.log(cookie_options.expiresIn);

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