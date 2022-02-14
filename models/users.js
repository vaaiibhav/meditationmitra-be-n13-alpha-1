const Mongoose = require("mongoose");

const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
  _id: Mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "member",
    enum: ["member", "coach"],
  },
  userCourses: {
    type: Mongoose.Schema.Types.ObjectId,
    ref:  "Courses"
  },
  userUpdated: Date,
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("User", UserSchema);
