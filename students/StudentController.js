const express = require("express");
const router = express.Router();

router.get("/alunos", (req, res) => {
  res.send("ROTA DE ALUNOS");
});

router.get("/admin/alunos/new", (req, res) => {
  res.send("ROTA PARA CRIAR UM NOVO ALUNO!");
});

module.exports = router;
