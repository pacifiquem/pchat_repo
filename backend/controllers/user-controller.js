const mongoose = require('mongoose');

const {Usermodel} = require('../models/user-model');
const asyncHandler = require('../middleware/asyncHandler');
const getTokenResponse = require('../utils/getTokenResponse');


exports.signUp = asyncHandler(async(req, res, next) => {
    const {email, username, password} = req.body;
    const fields = {email, username, password};

    //check if user name is in database
    const user = await Usermodel.create(fields);

    //send token response into cookies
    getTokenResponse(user, 201, res);
});