const express = require("express");
const router = express.Router();

// Models and Helpers
const Courses = require("../../models/courses");
// Get all Courses
router.get("/", async (req, res) => {
  const courses = await Courses.find()
    .populate("createdBy")
    .populate("category");
  res.send(courses);
});

// Courses Add new Course
router.post("/addcourse", async (req, res) => {
  const courses = await Courses.insert({});
  res.send(courses);
});
module.exports = router;
