const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  enrolled_courses: [
    { type: Schema.Types.ObjectId, ref: "Course", default: [] },
  ],
  notes: {
    type: Array,
    default: [],
  },
  bookmarks: {
    type: Array,
    default: [],
  },
  profile_picture: {
    type: String,
  },
});

module.exports = mongoose.model("User", user);
