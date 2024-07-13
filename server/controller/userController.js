const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function createUser(req, res) {
  try {
    const user = await User.findOne({ email: req?.body?.email });
    if (userExists) {
      res.send({
        success: false,
        message: "User already exists",
      });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = await newUser.save();

    res.send({
      success: true,
      message: "user created succesfully",
    });
  } catch (err) {
    console.log(err);
    res.send({ success: false, message: err });
  }
}

async function isUser(req, res) {
  try {
    const isUser = await User.findOne({ email: req?.body?.email });
    if (!isUser) {
      res.send({
        success: false,
        message: "user already exists!!",
      });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      isUser.password
    );
    if (!validPassword) {
      res.send({
        success: false,
        message: "invalid password",
        token : token
      });
      return;
    }
    const token = jwt.sign({userId : user._id }, "Scaler_Bms" ,{
      expiresIn : "1d",
    })
    res.send({
      success: true,
      message: "logged in",
    });
  } catch (err) {
    console.log(err);
    res.send({ success: false, message: err });
  }
}

module.exports = { createUser, isUser };
