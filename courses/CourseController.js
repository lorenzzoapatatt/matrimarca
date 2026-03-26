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
      res.redirect("/");
    });
  } else {
    res.redirect("/admin/courses/new");
  }
});

module.exports = router;
