const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");

//singup user
router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.status(201).json({ data: user });
  } catch {
    res.status(500).send();
  }
});

//login in user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = await User.find({ username })
    .populate("enrolled_courses")
    .exec();

  if (user.length === 0) {
    console.log("User not found");
    return res.status(404).send();
  }
  console.log(user);

  console.log(await bcrypt.compare(password, user[0].password));
  if (await bcrypt.compare(password, user[0].password)) {
    return res.status(200).json({ data: user, msg: "User Log-In" });
  } else {
    return res.status(404).json({ msg: "Invalid Credentials" });
  }
});

//updating user credentials
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const body = { ...req.body, password: hashedPassword };
    const user = await User.findByIdAndUpdate(id, body, { new: true })
      .populate("enrolled_courses")
      .exec();
    return res.status(203).json({ data: user });
  }
  const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    .populate("enrolled_courses")
    .exec();
  res.status(203).json({ data: user });
});

//get user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate("enrolled_courses").exec();
  res.status(200).json(user);
});

//get users by course_id
router.get("/usersByCourse/:id", async (req, res) => {
  const id = req.params.id;
  const users = await User.find({ enrolled_courses: id });
  res.status(200).json({ data: users });
});

module.exports = router;
