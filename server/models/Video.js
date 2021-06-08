const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const video = new Schema({
  title: { type: String },
  video_url: String,
  description: String,
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  week: Number,
});

module.exports = mongoose.model("Video", video);
