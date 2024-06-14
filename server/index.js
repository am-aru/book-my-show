require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectedToDb = require('./db');
const { port } = require('./server.config');
const router = require('./Routes/mainRouter');


connectedToDb();
app.use(express.json());
app.use('/' , router)


app.listen(port , () =>{
  console.log("server is listening");
});
console.log(port);
