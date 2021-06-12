const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username, password });
  if (user) {
    res.status(200).json({ data: user, msg: "User Log-In" });
  } else {
    res.status(404).json({ msg: "Invalid Credentials" });
  }
});

module.exports = router;
