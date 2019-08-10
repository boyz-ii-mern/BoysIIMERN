// const models = require("../../models");

module.exports = function (sequelize, DataTypes) {
    const Superlative = sequelize.define('Superlative', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    // Superlative.associate = function (models) {
    //     Superlative.belongsTo(models.EventPhoto, {
    //         onDelete: "cascade"
    //     });

    //     Superlative.hasOne(models.User);
    // }

    return Superlative
}

