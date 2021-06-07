const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  cart: [{ type: Schema.Types.ObjectId, ref: "Course", default: [] }],
  enrolled_courses: [
    { type: Schema.Types.ObjectId, ref: "Course", default: [] },
  ],
});

module.exports = mongoose.model("User", user);
