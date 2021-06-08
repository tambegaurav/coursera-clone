const mongoose = require("mongoose");

const course = mongoose.Schema({
  course_name: String,
  course_details: String,
  author: String,
  level: String,
  video_ids: [{ type: Schema.Types.ObjectId, ref: "Video", default: [] }],
  category: String,
});

module.exports = mongoose.model("Course", course);
