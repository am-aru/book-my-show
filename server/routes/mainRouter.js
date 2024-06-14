const express = require("express");
const router = express.Router();
const { usersRouter } = require("./usersRoute");

router.use("/user", usersRouter);

module.exports = router;