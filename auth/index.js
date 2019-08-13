const passport = require("passport");
// const user = require("../models/user").user
const models = require("../models");
const LocalStrategy = require("passport-local").Strategy;
// const jwt = require("jsonwebtoken")

passport.use(new LocalStrategy(
    function (email, password, done) { // callback with email and password from our form
        console.log("this is email: ", email);
        console.log("this is email: ", password);

        models.User.findOne({
            where: {
                "email": email,
                "password": password
            }
        }).then(function (data) {
            if (data == null) {
                return done(null)
            } else {
                let user = { username: data.email, firstName: data.firstName, superlative: data.superlative, photo: data.superlative }
                console.log("this is authenticated user object", user);
                return done(null, user);
            }

        }).catch(err => {
            console.log(err);
            return done(err);
        })

    }
));



// In order to help keep authentication state across HTTP requests,
// passport needs methods to serialize and deseralize the user
// this is a simple example, the serialzed user is the username -- which is stored in the session.
passport.serializeUser(function (user, callback) {
    callback(null, { username: user.username, firstName: user.firstName, superlative: user.superlative, photo: user.photo });
});

// the deserialized user is an object with a username property -- which is availabe as request.user
passport.deserializeUser(function (user, callback) {
    callback(null, { username: user.username, firstName: user.firstName, superlative: user.superlative, photo: user.photo });
});


function isAuthenticated(req, res, next) {
    // if (req.user) {
    //     return next();
    // }
    // return res.redirect("/");
    return next()
};


// const generateToken = username => (req, res) => {
//     const expiration = Date.now() + 3600000
//     const token = jwt.sign({user: username}, process.env.AUTH_SECRET, {
//         expiresIn: 3600
//     })
//     res.json({
//         token: token,
//         username: username,
//         expiration: expiration
//     })
// }

// const jwtAuth = (req, res, next) => {
//     const token = req.headers['token']
//     if (token)
//         jwt.verify(token, process.env.AUTH_SECRET, (err, decode) => {
//             if (err)
//                 res.status(500).json({error: 'Invalid token'})
//             else next()
//         })
//     else res.json({error: 'Must include token with requests'})
// }



module.exports = { passport, isAuthenticated }