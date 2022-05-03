const express = require('express');
const dotenv = require('dotenv').config({path: './config/config.env'});
const colors = require('colors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const dbConnection = require('./config/db');
const user_router = require('./routes/user-routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
dbConnection(); //connecting to db

app.use(express.json());

app.use('/users', user_router);
app.use(cookieParser())
app.use(errorHandler);





app.listen(process.env.port, ()=>{
    console.log(`server running at ${process.env.port}`.bgBlack.magenta.bold);
});