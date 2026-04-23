"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "type", {
      type: Sequelize.ENUM("presential", "online"),
      allowNull: false,
      defaultValue: "presential",
    });

    await queryInterface.addColumn("courses", "description", {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn("courses", "is_active", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });

    await queryInterface.addColumn("courses", "created_at", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });

    await queryInterface.addColumn("courses", "updated_at", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
      ),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("courses", "updated_at");
    await queryInterface.removeColumn("courses", "created_at");
    await queryInterface.removeColumn("courses", "is_active");
    await queryInterface.removeColumn("courses", "description");
    await queryInterface.removeColumn("courses", "type");
  },
};
