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
        },
        members: {
            type: DataTypes.STRING,
        }
    })

    // Event.associate = function (models) {
    //     Event.belongsTo(models.Group, {
    //         onDelete: "cascade"
    //     });

    //     Event.hasMany(models.EventPhoto, {
    //         onDelete: "cascade"
    //     });
    // }

    return Event
}


// 1. Create Event (name, location, date/time)
// 2. Add Members to Event (eventId, user)
    // get event, add members, serialized
    // save event
// 3. get events by User (user)
// 4. add photos
// 5. add superlatives
