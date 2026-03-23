const Sequelize = require("sequelize");
const connection = new Sequelize("matrimarca", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
});

module.exports = connection;
