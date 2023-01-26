'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.DataTypes.INTEGER
      },
      email:{
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING
      },
      username:{
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING
      },
      phone_number:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      password:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("User")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
