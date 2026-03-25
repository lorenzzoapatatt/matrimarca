const express = require("express");
const router = express.Router();

router.get("/courses", (req, res) => {
  res.send("ROTA DE CURSOS");
});

router.get("/admin/courses/new", (req, res) => {
  res.send("ROTA PARA CRIAR UM NOVO CURSO!");
});

module.exports = router;
