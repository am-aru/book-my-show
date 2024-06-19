const express = require("express");
const router = express.Router();
const { usersRouter } = require("./usersRoute");

console.log("Main router")

router.use("/user", usersRouter);

module.exports = router;
