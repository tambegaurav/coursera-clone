const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

//Getting all the courses
router.get("/all", async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({ data: courses });
});

// Add Course
router.post("/addcourse", async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json({ data: course });
});

// Get course by ID
router.get("/:id", async (req, res) => {
  id = req.params.id;
  const course = await Course.findById(id);
  res.status(200).json({ data: course });
});

// Get course by Course Name
router.get("/:course_name", async (req, res) => {
  course_name = req.params.course_name;
  const courses = await Course.find({
    $or: [
      { course_name: { $regex: search.keyWord, $options: "i" } },
      { course_details: { $regex: search.keyWord, $options: "i" } },
    ],
  });
  res.status(200).json({ data: courses });
});

// Edit course
router.patch("/:id", async (req, res) => {
  id = req.params.id;
  const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
  res.status(203).json({ data: course });
});

router.post("/getCourses", async (req, res) => {
  var filters = req.body.filters;
  var query = req.body.query;
  console.log(filters, query);
  var data = [];
  if (filters.length === 0) {
    const courses = await Course.find({
      $or: [
        { course_name: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { course_details: { $regex: query, $options: "i" } },
      ],
    });
    console.log(courses);
    data.push(courses);
  } else {
    for (var i = 0; i < filters.length; i++) {
      const courses = await Course.find({
        $and: [
          { course_name: { $regex: query, $options: "i" } },
          { $or: [{ level: filters[i] }, { category: filters[i] }] },
        ],
      });
      console.log(courses + "  " + filters[i]);
      data.push(courses);
    }
  }

  // data = new Set(data);
  console.log(data);
  res.status(200).json({ data: data });
});

module.exports = router;
