const express = require("express");
const { createUser, isUser } = require("../controller/userController");
const usersRouter = express.Router();

usersRouter.post("/register", createUser);
usersRouter.post("/login", isUser);


module.exports = { usersRouter };
