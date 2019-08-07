const passport = require("passport");
const user = require("../models/user").user
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
  function (email, password, done) { // callback with email and password from our form
    console.log("this is email: ", email);

    user.userSearch(email, function (data) {
      console.log("this is the mysql user data: ", data);
      if (!data[0]){
        return console.log("Incorrect Email");
      }
      else if (data[0].password != password || !data[0]){
        return console.log("Incorrect Password");
      }

      // if the user is found but the password is wrong
      // if (!(data[0].password == password))
      //   return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

      // all is well, return successful user
      // return done(null, data[0]);
      let user = { username: data[0].email };
      return done(null, user);

    });



  }
));



// In order to help keep authentication state across HTTP requests,
// passport needs methods to serialize and deseralize the user
// this is a simple example, the serialzed user is the username -- which is stored in the session.
passport.serializeUser(function (user, callback) {
  callback(null, user.username);
});

// the deserialized user is an object with a username property -- which is availabe as request.user
passport.deserializeUser(function (username, callback) {
  callback(null, { username });
});



module.exports = passport;