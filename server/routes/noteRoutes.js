const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//get note by user_id and video_id
router.get("/get/:user_id/:video_id", async (req, res) => {
  user_id = req.params.user_id;
  video_id = req.params.video_id;
  const note = await Note.findOne({ user_id, video_id });
  if (note) {
    res.status(200).json({ data: note });
  } else {
    res.status(200).json({
      data: {
        content: "",
      },
    });
  }
});

// if note exists, update it or else create new
router.put("/patch/:user_id/:video_id", async (req, res) => {
  user_id = req.params.user_id;
  video_id = req.params.video_id;

  const note = await Note.findOne({ user_id, video_id });

  if (note) {
    const updatedNote = await Note.findOneAndUpdate(
      { user_id, video_id },
      { user_id, video_id, content: req.body.content },
      {
        new: true,
      }
    );
    console.log("updated old to new", updatedNote);
    res.status(203).json({ data: updatedNote });
  } else {
    const updatedNote = await Note.create({
      user_id,
      video_id,
      content: req.body.content,
    });
    console.log("created new", updatedNote);

    res.status(201).json({ data: updatedNote });
  }
});

module.exports = router;
