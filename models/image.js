module.exports = function (sequelize, DataTypes) {
    const Image = sequelize.define('Image', {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Image
}
