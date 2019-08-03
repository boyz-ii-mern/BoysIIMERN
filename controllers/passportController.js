const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    // simple, static login strategy based on the username
    // "baduser" will be rejected and invalid username, everyone else has a password of "password"
    function(username, password, done) {
        console.log(username, password)
      // When a user tries to sign in this code runs
      // If we're trying to log in with an invalide username
      if (!username || username.toLowerCase() === "baduser") {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If we're using an invalid password
      else if (password != "password") {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // successful login, return the user -- which consists of an object holding the username
      let user = {username};  
      return done(null, user);
    }
  ));
  
  // In order to help keep authentication state across HTTP requests,
  // passport needs methods to serialize and deseralize the user
  // this is a simple example, the serialzed user is the username -- which is stored in the session.
  passport.serializeUser(function(user, callback) {
    callback(null, user.username);
  });
  
  // the deserialized user is an object with a username property -- which is availabe as request.user
  passport.deserializeUser(function(username, callback) {
    callback(null, {username});
  });

  

  module.exports = passport;