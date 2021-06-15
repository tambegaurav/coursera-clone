const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmark = Schema({
  video_id: String,
  user_id: String,
  img_url: String,
  time_stamp: Date,
});

module.exports = mongoose.model("Bookmark", bookmark);
