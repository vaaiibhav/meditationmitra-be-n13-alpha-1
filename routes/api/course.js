const express = require("express");
const router = express.Router();

// Models and Helpers
const Courses = require("../../models/courses");

router.get("/", async (req, res) => {
  const courses = await Courses.find().populate("createdBy");
  res.send(courses);
});

router.post("/addcourse",async (req, res) => {
  
  const courses = await Courses.insert({});
  res.send(courses);
  });
module.exports = router;
