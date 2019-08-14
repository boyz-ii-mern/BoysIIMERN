module.exports = function (sequelize, DataTypes) {
    const EventPhoto = sequelize.define('EventPhoto', {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    })

    EventPhoto.associate = function (models) {
        EventPhoto.belongsTo(models.Event, {
            onDelete: "cascade"
        });
        
        // EventPhoto.hasMany(models.User, {
        //     as: "Tags" 
        // });
    }

    return EventPhoto
}
