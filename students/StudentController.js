const express = require("express");
const router = express.Router();

router.get("/students", (req, res) => {
  res.send("STUDENTS ROUTE");
});

router.get("/admin/students/new", (req, res) => {
  res.send("ROUTE TO CREATE A NEW STUDENT!");
});

module.exports = router;
