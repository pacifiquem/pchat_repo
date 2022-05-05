const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please provide a valid email'],
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
        required: true
    },
});


//get JWT
userSchema.methods.getJsonWebToken = () => {
    const token = jwt.sign({
        id: this._id,
        username: this.username
    }, process.env.JWT_SECRET_KEY);

    return token;
}


//compare hashed
userSchema.methods.compareHashes = async(password, hashedPassword) => {
    const arePassWordsMatch = await bcrypt.compare(password, hashedPassword);

    return arePassWordsMatch;
}


module.exports.Usermodel = mongoose.model('Users', userSchema);