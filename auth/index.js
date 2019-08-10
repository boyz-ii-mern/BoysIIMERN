const passport = require("passport");
// const user = require("../models/user").user
const models = require("../models");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    function (email, password, done) { // callback with email and password from our form
        console.log("this is email: ", email);

        // user.userSearch(email, function (data) {
        //     console.log("this is the mysql user data: ", data);
        //     if (!data[0]) {
        //         return console.log("Incorrect Email");
        //     }
        //     else if (data[0].password != password || !data[0]) {
        //         return console.log("Incorrect Password");
        //     }

        //     let user = { username: data[0].email };
        //     return done(null, user);

        // });

        models.User.findOne({
            where: {
                "email": email
            }
        }).then(function(data){
            // console.log(data);
            let user = { username: data.email, firstName: data.firstName, superlative: data.superlative, photo: data.superlative}
            return done(null,user);
        })

    }
));



// In order to help keep authentication state across HTTP requests,
// passport needs methods to serialize and deseralize the user
// this is a simple example, the serialzed user is the username -- which is stored in the session.
passport.serializeUser(function (user, callback) {
    callback(null, {username: user.username, firstName: user.firstName, superlative: user.superlative, photo: user.superlative});
});

// the deserialized user is an object with a username property -- which is availabe as request.user
passport.deserializeUser(function (user, callback) {
    callback(null, { username: user.username, firstName: user.firstName, superlative: user.superlative, photo: user.superlative});
});



module.exports = passport;