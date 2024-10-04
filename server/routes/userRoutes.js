const express = require("express");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/authMiddleWare");

const userRouter = express.Router();
userRouter.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "user exists already",
      });
    }

    const newUser = new User(req.body);
    console.log({ newUser });
    await newUser.save();
    res.send({
      success: true,
      message: "user registered successfully",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  console.log("log in ", req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log({user});
    if (!user) {
      return res.send({
        success: false,
        message: "user not found",
      });
    }
    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "incorrect password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1 day",
    });
    console.log(token);

    res.send({
      success: true,
      message: "user login successfully",
      data: token,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
});

userRouter.get("/get-current-user" ,auth, async(req , res) => {
    // console.log(req.url,req.method);
    // console.log(req.headers["authorization"]);

    const user = await user.findById(req.body.userId).select("-password");
    res.send({ success:true , message: "you are authenticated", data : user})

})

module.exports = userRouter;
