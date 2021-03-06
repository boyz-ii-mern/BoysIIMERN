const bcrypt = require("bcryptjs");


//////////////////////////////////////////////////////////////
// need to delete once sequelize is implemented
//////////////////////////////////////////////////////////////
// let orm = require("../config/orm");
// var user = {
//     userSearch: function (email, cb) {
//         orm.userSearch("users", email, function (res) {
//             cb(res);
//         })
//     }
// };
//////////////////////////////////////////////////////////////


module.exports = function userModel(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        superlative: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        {
            timestamps: false
        },
        {
            hooks: {
                beforeCreate: (user, options) => {
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                }
            }
        })

    User.associate = function (models) {
        User.hasMany(models.Event, {
            onDelete: 'NO ACTION'
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        })
        User.hasMany(models.Superlative, {
            as: "EventSuperlative",
            onDelete: "cascade"
        })
    }

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }

    return User
}

// module.exports = { user, userModel };