module.exports = function (sequelize, DataTypes) {
    const Membership = sequelize.define('Membership', {})

    Membership.associate = function (models) {
        Membership.belongsTo(models.Group);
        Membership.belongsTo(models.User);
    }

    return Membership
}
