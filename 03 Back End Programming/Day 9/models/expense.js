const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("Expense", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            type: Sequelize.DataTypes.INTEGER
        },
        category:{
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
        date:{
            allowNull: false,
            type: Sequelize.DataTypes.DATEONLY
        },
        currency:{
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        },
        total:{
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        }
    });
    return Expense;
}