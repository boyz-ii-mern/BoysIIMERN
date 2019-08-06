let orm = require("../config/orm");

var user = {
    userSearch: function (email, cb) {
        orm.userSearch("users", email, function (res) {
            cb(res);
        })
    }
};

module.exports = user;