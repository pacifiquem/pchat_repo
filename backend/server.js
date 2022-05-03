const express = require('express');
const dotenv = require('dotenv').config({path: './config/config.env'});
const colors = require('colors');
const mongoose = require('mongoose');

const dbConnection = require('./config/db');

const app = express();
dbConnection();




app.listen(process.env.port, ()=>{
    console.log(`server running at ${process.env.port}`.bgBlack.magenta.bold);
});