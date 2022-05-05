const mongoose = require('mongoose');

const {Usermodel} = require('../models/user-model');
const asyncHandler = require('../middleware/asyncHandler');
const getTokenResponse = require('../utils/getTokenResponse');
const hash = require('../utils/hash');



//access                       public
//route                        localhost:1880/users/signup
//discription                  user sign up
exports.signUp = asyncHandler(async(req, res, next) => {
    let {email, username, password} = req.body;

    password = await hash(password);
    const fields = {email, username, password};

    //check if user name is in database
    const user = await Usermodel.create(fields);

    //send token response into cookies
    getTokenResponse(user, 201, res);
});


//access                       public
//route                        localhost:1880/users/login
//discription                  user login
exports.login = asyncHandler(async(req, res, next) => {
    let {email, password} = req.body;

    const user = await Usermodel.findOne({
        email
    });

    if(!user) {
        res.status(403).json({
            success: false,
            message : `invalid email or password`
        });
    }

    if(await user.compareHashes(password, user.password) === true) {
        
        getTokenResponse(user, 200, res);
    }else {
        res.status(401).json({
            success: false,
            message: `invalid email or password`
        })
    }
})