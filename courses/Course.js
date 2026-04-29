const { DataTypes } = require("sequelize");
const connection = require("../database/database");

const Course = connection.define("courses", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workload: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("presential", "online"),
    allowNull: false,
    defaultValue: "presential",
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

// will force create a table
// Course.sync({ force: true });

module.exports = Course;
