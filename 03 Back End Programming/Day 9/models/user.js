const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
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
    });
    return User;
}