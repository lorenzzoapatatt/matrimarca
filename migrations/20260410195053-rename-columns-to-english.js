"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Rename columns in courses table
    await queryInterface.renameColumn("courses", "nome", "name");
    await queryInterface.renameColumn("courses", "cargaHoraria", "workload");

    // Rename table alunos to students
    await queryInterface.renameTable("alunos", "students");
  },

  async down(queryInterface, Sequelize) {
    // Revert the changes
    await queryInterface.renameColumn("courses", "name", "nome");
    await queryInterface.renameColumn("courses", "workload", "cargaHoraria");
    await queryInterface.renameTable("students", "alunos");
  },
};
