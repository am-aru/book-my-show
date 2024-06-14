const mongoose = require("mongoose");
const { username, password } = require("./server.config");


const connectedToDb = async function connectToDb() {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.3rwxfs2.mongodb.net/book-my-show`
    );
    console.log("db is connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectedToDb;
