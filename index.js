const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./database/database");

const courseController = require("./courses/CourseController");
const studentController = require("./students/StudentController");
const userController = require("./users/userController");

const Student = require("./students/Student");
const Course = require("./courses/Course");

//view engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database synchronization
// Student.sync({ force: false });
// Course.sync({ force: false });
// User.sync({ force: false });
// Se quisar remodelar o banco bote para true

//Database
connection
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", courseController);
app.use("/", studentController);
app.use("/", userController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, (req, res) => {
  console.log("running");
});
