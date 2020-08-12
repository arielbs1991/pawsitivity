const Sequelize = require("sequelize");
const sequelize = require("./index");

module.exports = function (sequelize, DataTypes) {
    var Shelter = sequelize.define("Shelter", {
        shelterName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: false
        }
    });

    Shelter.associate = function (models) {
        Shelter.hasMany(models.Pets, {
            foreignKey: 'shelterId',
            // unique: 'uniqueMatches',
            onDelete: 'cascade'
        });
    };
    return Shelter;
};
