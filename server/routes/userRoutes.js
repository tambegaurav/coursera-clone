const express = require("express");
const router = express.Router();
const User = require("../models/User");

//singup user
router.post("/signup", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
});

//login in user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username, password });
  if (user) {
    res.status(200).json({ data: user, msg: "User Log-In" });
  } else {
    res.status(404).json({ msg: "Invalid Credentials" });
  }
});

//updating user credentials
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(203).json({ data: user });
});

//get user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);
  res.status(200).json(user);
});

module.exports = router;
