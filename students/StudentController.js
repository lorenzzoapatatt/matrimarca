const express = require("express");
const router = express.Router();
const Student = require("./Student");

router.get("/admin/students/new", (req, res) => {
  res.render("admin/students/new");
});

router.post("/students/save", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let dateBirth = req.body.dateBirth;

  if (name != undefined && email != undefined && dateBirth != undefined) {
    Student.create({
      name: name,
      email: email,
      dateBirth: dateBirth,
    }).then(() => {
      res.redirect("/admin/students");
    });
  } else {
    res.redirect("/admin/students/new");
  }
});

router.get("/admin/students", (req, res) => {
  Student.findAll().then((students) => {
    res.render("admin/students/index", { students: students });
  });
});

router.post("/students/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Student.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/students");
      });
    } else {
      // if not a number
      res.redirect("/admin/students");
    }
  } else {
    // NULL
    res.redirect("/admin/students");
  }
});

router.get("/admin/students/edit/:id", (req, res) => {
  var id = req.params.id;

  // check if it's a number
  if (isNaN(id)) {
    res.redirect("/admin/students");
  }

  Student.findByPk(id)
    .then((students) => {
      if (students != undefined) {
        res.render("admin/students/edit", { students: students });
      } else {
        res.redirect("/admin/students");
      }
    })
    .catch((error) => {
      res.redirect("/admin/students");
    });
});

router.post("/students/update", (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var email = req.body.email;
  var dateBirth = req.body.dateBirth;

  Student.update(
    { name: name, email: email, dateBirth: dateBirth },
    {
      where: {
        id: id,
      },
    },
  ).then(() => {
    res.redirect("/admin/students");
  });
});

module.exports = router;
