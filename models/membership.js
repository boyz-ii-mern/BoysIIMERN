module.exports = function (sequelize, DataTypes) {
    const Membership = sequelize.define('Membership', {})

    Membership.associate = function (models) {
        Membership.belongsTo(models.Group, {
            onDelete: "cascade"
        });
        Membership.belongsTo(models.User, {
            onDelete: "cascade"
        });
    }

    return Membership
}
