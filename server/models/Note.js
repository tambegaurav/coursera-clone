const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const note = Schema({
  video_id: String,
  user_id: String,
  content: String,
});

module.exports = mongoose.model("Note", note);
