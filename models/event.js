module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define('Event', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        }
    })

    // Event.associate = function (models) {
    //     Event.belongsTo(models.Group, {
    //         onDelete: "cascade"
    //     });
        
    //     Event.hasOne(models.User, {
    //         as: "Admin"
    //     });
        
    //     Event.hasMany(models.User, {
    //         as: "Attendees"
    //     });
        
    //     Event.hasMany(models.EventPhoto, {
    //         onDelete: "cascade"
    //     });
    // }

    return Event
}
