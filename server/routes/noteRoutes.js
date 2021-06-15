const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//creating note for 1st time
router.post("/add", async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json({ data: note });
});

//get note by user_id and video_id
router.get("/get/:user_id/:video_id", async (req, res) => {
  user_id = req.params.user_id;
  video_id = req.params.video_id;
  const note = await Note.find({ user_id, video_id });
  if (note.length > 0) {
    res.status(200).json({ data: note });
  } else {
    res.status(200).json({
      data: {
        content: "",
      },
    });
  }
});

// if note exists, keep editing it
router.patch("/patch/:user_id/:video_id", async (req, res) => {
  user_id = req.params.user_id;
  video_id = req.params.video_id;
  const updatedNote = await Note.find({ user_id, video_id }, req.body, {
    new: true,
  });
  res.status(203).json({ data: updatedNote });
});

module.exports = router;
