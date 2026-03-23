const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./database/database");

app.set("view engine", "ejs");

//arquivos estaticos
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database

connection
  .authenticate()
  .then(() => {
    console.log("sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, (req, res) => {
  console.log("rodando");
});
