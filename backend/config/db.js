const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: './config.env'});
const colors = require('colors');

const dbConnection =async () => {

    try {
        const conn =  await mongoose.connect(process.env.dbUrl,{
            useNewUrlParser : true,
            useUnifiedTopology: true
        })

        if(conn) {
            console.log(`database is connected`.bgBlack.cyan.bold);
        }
    } catch (error) {
        console.log(error);
        mongoose.connection.close()
    }
}

module.exports = dbConnection;