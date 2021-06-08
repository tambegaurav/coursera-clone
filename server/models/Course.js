const mongoose = require("mongoose");

const course = mongoose.Schema({
  course_name: String,
  course_details: String,
  author: String,
  level: String,
});

module.exports = mongoose.model("Course", course);
