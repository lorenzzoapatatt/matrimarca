const Sequelize = require("sequelize");
const connection = require("../database/database");

const Course = connection.define("courses", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cargaHoraria: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// vai ficar forçando a criar uma tabela
// Course.sync({ force: true });

module.exports = Course;
