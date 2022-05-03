const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: './config.env'});
const colors = require('colors');

const dbConnection =async () => {
   await mongoose.connect(process.env.dbUrl,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    }, () => {
        console.log(`database is connected`.bgBlack.cyan.bold);
    });
}

module.exports = dbConnection;