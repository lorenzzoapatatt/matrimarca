const express = require("express");
const router = express.Router();
const Course = require("./Course");

router.get("/admin/courses/new", (req, res) => {
  res.render("admin/courses/new");
});

router.post("/courses/save", (req, res) => {
  let nome = req.body.nome;
  let cargaHoraria = req.body.cargaHoraria;

  if (nome != undefined && cargaHoraria != undefined) {
    Course.create({
      nome: nome,
      cargaHoraria: cargaHoraria,
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
      // nao for um numero
      res.redirect("/admin/courses");
    }
  } else {
    //NULL
    res.redirect("/admin/courses");
  }
});

router.get("/admin/courses/edit/:id", (req, res) => {
  var id = req.params.id;

  //ve se é um numero
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

module.exports = router;
