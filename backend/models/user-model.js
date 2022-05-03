const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');



const Usermodel = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/, 'please provide a valid email'],
        unique: true
    },
    username : {
        type: String,
        required: true,
        minLength: [3, 'username mustbe atleast 3 characters long'],
        maxLength: [20, 'username mustbe lessthan 20 characters long'],
        unique: true,
    },
    password : {
        type: String,
        required: true,
        minLength: [6, 'username mustbe atleast 3 characters long'],
        maxLength: [10, 'username mustbe lessthan 30 characters long']
    },
});


//get JWT

Usermodel.methods.getJsonWebToken = () => {
    const token = jwt.sign({
        id: this._id,
        username: this.username
    }, process.env.JWT_SECRET_KEY);

    return token;
}


module.exports.Usermodel = mongoose.model('Users', Usermodel);