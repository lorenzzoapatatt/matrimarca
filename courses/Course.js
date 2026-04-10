const Sequelize = require("sequelize");
const connection = require("../database/database");

const Course = connection.define("courses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  workload: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// will force create a table
// Course.sync({ force: true });

module.exports = Course;
