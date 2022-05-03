const express = require('express');
const dotenv = require('dotenv').config({path: './config/config.env'});
const colors = require('colors');
const mongoose = require('mongoose');

const dbConnection = require('./config/db');
const user_router = require('./routes/user-routes');

const app = express();
dbConnection(); //connecting to db

app.use('/users', user_router);





app.listen(process.env.port, ()=>{
    console.log(`server running at ${process.env.port}`.bgBlack.magenta.bold);
});