const { DataTypes } = require("sequelize");
const connection = require("../database/database");
const Course = require("../courses/Course");

const Student = connection.define("students", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certified: {
    type: DataTypes.ENUM(["yes", "no"]),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

Course.hasMany(Student); // a course has many students
Student.belongsTo(Course); // a student belongs to a course

// will force create a table
// Student.sync({ force: true });

module.exports = Student;
