module.exports = function (sequelize, DataTypes) {
    const Admin = sequelize.define('Admin', {})

    Admin.associate = function (models) {
        Admin.belongsTo(models.Event);
        Admin.belongsTo(models.User);
    }

    return Admin
}
