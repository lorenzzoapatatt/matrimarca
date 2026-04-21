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
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  certified: {
    type: Sequelize.ENUM(["yes", "no"]),
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

Course.hasMany(Student); // a course has many students
Student.belongsTo(Course); // a student belongs to a course

// will force create a table
// Student.sync({ force: true });

module.exports = Student;
