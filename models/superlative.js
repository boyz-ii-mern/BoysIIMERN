module.exports = function (sequelize, DataTypes) {
    const Superlative = sequelize.define('Superlative', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Superlative.associate = function (models) {
        Superlative.belongsTo(models.Event, {
            onDelete: "cascade"
        });

        Superlative.belongsTo(models.User);
    }

    return Superlative
}

