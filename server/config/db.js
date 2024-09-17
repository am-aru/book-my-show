const mongoose = require('mongoose');
const DbUrl = process.env.DB_URL;

console.log(DbUrl);

const connectDB = async() =>{
    try{
      await mongoose.connect(DbUrl);
      console.log("connected to db");
    }catch(err){
       console.log("error connecting to db", err);
    }
}

module.exports = connectDB;