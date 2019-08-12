module.exports = function (sequelize, DataTypes) {
    const Group = sequelize.define('Group', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Group.associate = function (models) {
        Group.hasOne(models.Image, {
            as: "Banner"
        });

        Group.hasMany(models.Event, {
            onDelete: 'cascade'
        });
    }
    return Group

}

