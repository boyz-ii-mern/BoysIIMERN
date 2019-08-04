let orm = require("../config/orm");

var user = {
    all: function (cb) {
        orm.all("users", function (res) {
            cb(res);
        })
    }
};

module.exports = user;