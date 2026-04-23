const Sequelize = require("sequelize");
const connection = require("../database/database");

const Course = connection.define(
  "courses",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    workload: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM("presential", "online"),
      allowNull: false,
      defaultValue: "presential",
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    underscored: true,
  },
);

// will force create a table
// Course.sync({ force: true });

module.exports = Course;
