const express = require("express");
const router = express.Router();
const Course = require("./Course");

router.get("/admin/courses/new", (req, res) => {
  res.render("admin/courses/new");
});

router.post("/courses/save", (req, res) => {
  let name = req.body.name;
  let workload = req.body.workload;
  let type = req.body.type;
  let description = req.body.description;
  let is_active = req.body.is_active === "on";

  if (name != undefined && workload != undefined && type != undefined) {
    Course.create({
      name: name,
      workload: workload,
      type: type,
      description: description,
      is_active: is_active,
    }).then(() => {
      res.redirect("/admin/courses");
    });
  } else {
    res.redirect("/admin/courses/new");
  }
});

router.get("/admin/courses", (req, res) => {
  Course.findAll().then((courses) => {
    res.render("admin/courses/index", { courses: courses });
  });
});

router.post("/courses/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Course.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/courses");
      });
    } else {
      // if not a number
      res.redirect("/admin/courses");
    }
  } else {
    // NULL
    res.redirect("/admin/courses");
  }
});

router.get("/admin/courses/edit/:id", (req, res) => {
  var id = req.params.id;

  // check if it's a number
  if (isNaN(id)) {
    res.redirect("/admin/courses");
  }

  Course.findByPk(id)
    .then((courses) => {
      if (courses != undefined) {
        res.render("admin/courses/edit", { courses: courses });
      } else {
        res.redirect("/admin/courses");
      }
    })
    .catch((error) => {
      res.redirect("/admin/courses");
    });
});

router.post("/courses/update", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var workload = req.body.workload;
  var type = req.body.type;
  var description = req.body.description;
  var is_active = req.body.is_active === "on";

  Course.update(
    {
      name: name,
      workload: workload,
      type: type,
      description: description,
      is_active: is_active,
    },
    {
      where: {
        id: id,
      },
    },
  ).then(() => {
    res.redirect("/admin/courses");
  });
});

module.exports = router;
