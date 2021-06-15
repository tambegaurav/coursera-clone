const express = require("express");
const router = express.Router();
const Snapshot = require("../models/Snapshot");

//posting snapshots
router.post("/add", async (req, res) => {
  console.log("snap");
  const snap = await Snapshot.create(req.body);
  res.status(201).json({ data: snap });
});

//get snapshots by user_id and video_id
router.get("/get/:user_id/:video_id", async (req, res) => {
  user_id = req.params.user_id;
  video_id = req.params.video_id;
  const snaps = await Snapshot.find({ user_id, video_id });
  res.status(200).json({ data: snaps });
});

module.exports = router;
