const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
//for populating anything add below line with name of the refencing column that you want to populate
//eg: Course.find().populate("video_ids").exec()

//Getting all the courses
router.get("/all", async (req, res) => {
  const courses = await Course.find().exec();
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
  const course = await Course.findById(id).populate("video_ids").exec();
  res.status(200).json({ data: course });
});

// Get course by ID and not populate video_ids
router.get("/:id/videoids", async (req, res) => {
  id = req.params.id;
  const course = await Course.findById(id).exec();
  res.status(200).json({ data: course });
});

// Get course by Course Name
router.get("/:course_name", async (req, res) => {
  course_name = req.params.course_name;
  const courses = await Course.find({
    $or: [
      { course_name: { $regex: course_name, $options: "i" } },
      { course_details: { $regex: course_name, $options: "i" } },
    ],
  })
    .populate("video_ids")
    .exec();
  res.status(200).json({ data: courses });
});

// Get course by Category
router.get("/browse/:category", async (req, res) => {
  category = req.params.category;
  const courses = await Course.find({
    category: { $regex: category, $options: "i" },
  })
    .populate()
    .exec();
  res.status(200).json({ data: courses });
});

// Get course by Course Name
router.get("/:category/:course_name", async (req, res) => {
  course_name = req.params.course_name;
  category = req.params.category;
  console.log(category, course_name);
  const courses = await Course.find({
    $and: [
      { course_name: { $regex: course_name, $options: "i" } },
      { category: { $regex: category, $options: "i" } },
    ],
  })
    .populate("video_ids")
    .exec();
  res.status(200).json({ data: courses });
});
// Get course by ID
router.get("/:id", async (req, res) => {
  id = req.params.id;
  const course = await Course.findById(id).populate("video_ids").exec();
  res.status(200).json({ data: course });
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
  var limit = req.body.limit;
  console.log(filters, query);
  var data = [];
  if (filters.length === 0) {
    const courses = await Course.find({
      $or: [
        { course_name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { course_details: { $regex: query, $options: "i" } },
      ],
    });
    console.log(courses);
    data.push(courses);

    const count = await Course.find({
      $or: [
        { course_name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { course_details: { $regex: query, $options: "i" } },
      ],
    }).count();

    console.log(data);
    res.status(200).json({ data: data, pages: Math.ceil(count / limit) });
  } else {
    var sum = 0;
    for (var i = 0; i < filters.length; i++) {
      const courses = await Course.find({
        $and: [
          { course_name: { $regex: query, $options: "i" } },
          { $or: [{ level: filters[i] }, { category: filters[i] }] },
        ],
      });
      console.log(courses + "  " + filters[i]);
      data.push(courses);
      const count = await Course.find({
        $and: [
          { course_name: { $regex: query, $options: "i" } },
          { $or: [{ level: filters[i] }, { category: filters[i] }] },
        ],
      }).count();
      sum += count;
    }
    console.log(data);
    res.status(200).json({ data: data, pages: Math.ceil(sum / limit) });
  }
  // data = new Set(data);
});

module.exports = router;
