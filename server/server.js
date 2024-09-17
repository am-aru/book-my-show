const express = require('express');


const app = express();
require('dotenv').config();

const connectDB = require('./config/db');

connectDB();
app.listen(8882 , ()=>{
    console.log("server is listening");
})