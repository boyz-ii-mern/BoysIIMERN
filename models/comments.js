module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.Event, {
            onDelete: "cascade"
        });
    }
    return Comment

}