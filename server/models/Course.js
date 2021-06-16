const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const course = Schema({
  course_name: String,
  course_details: String,
  author: String,
  level: String,
  video_ids: [{ type: Schema.Types.ObjectId, ref: "Video", default: [] }],
  category: String,
  course_img: { type: String, default: "" },
  author_img: { type: String, default: "" },
});

module.exports = mongoose.model("Course", course);
