const express = require('express');
var cors = require('cors')


const app = express();

app.use(cors())
require('dotenv').config();

const connectDB = require('./config/db');

connectDB();

const userRouter = require('./routes/userRoutes');
app.use(express.json);
app.use("/api/users" , userRouter);

app.listen(8082 , ()=>{
    console.log("server is listening");
});