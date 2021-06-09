const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// Get all videos for particular courses
router.get("/:course_id/videos", async (req, res) => {
  course_id = req.params.course_id;

  const videos = await Video.find({ course_id: course_id });
  res.status(200).json({ data: videos });
});

// Get all videos based on Course Id and week
router.get("/:course_id/:week/videos", async (req, res) => {
  course_id = req.params.course_id;
  week = +req.params.week;

  const videos = await Video.find({ course_id: course_id, week: week });
  res.status(200).json({ data: videos });
});

//To get Particular Video by Video_id
router.get("/:video_id", async (req, res) => {
  video_id = req.params.video_id;

  const video = await Video.findById(video_id);
  res.status(200).json({ data: video });
});

// Adding Video to course based on Course_Id
router.post("/:course_id/addvideo", async (req, res) => {
  course_id = req.params.course_id;
  const video = await Video.create({ ...req.body, course_id: course_id });
  res.status(201).json({ data: video });
});

module.exports = router;
