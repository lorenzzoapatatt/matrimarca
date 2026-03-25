const Sequelize = require("sequelize");
const connection = require("../database/database");
const Course = require("../courses/Course");

const Student = connection.define("alunos", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateBirth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Course.hasMany(Student); // um curso tem varios alunos
Student.belongsTo(Course); //um aluno pertence a um curso

// vai ficar forçando a criar uma tabela
// Student.sync({ force: true });

module.exports = Student;
