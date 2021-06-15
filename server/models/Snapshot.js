const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snapshot = Schema({
  video_id: String,
  user_id: String,
  img_url: String,
  display_time: String,
  time_stamp: Number,
});

module.exports = mongoose.model("Snapshot", snapshot);
