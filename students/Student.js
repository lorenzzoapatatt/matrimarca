const Sequelize = require("sequelize");
const connection = require("../database/database");
const Course = require("../courses/Course");

const Student = connection.define("students", {
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

Course.hasMany(Student); // a course has many students
Student.belongsTo(Course); // a student belongs to a course

// will force create a table
// Student.sync({ force: true });

module.exports = Student;
