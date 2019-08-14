module.exports = function (sequelize, DataTypes) {
    const Group = sequelize.define('Group', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bannerImage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Group.associate = function (models) {
        Group.hasMany(models.Event, {
            onDelete: 'cascade'
        });
    }
    return Group

}

