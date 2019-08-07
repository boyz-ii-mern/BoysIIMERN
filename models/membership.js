module.exports = function (sequelize, DataTypes) {
    const Membership = sequelize.define('Membership', {})

    Membership.associate = function (models) {
        Membership.hasOne(models.User, { as: 'Member' });
        Membership.belongsTo(models.Group);
    }

    return Membership
}
