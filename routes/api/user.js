const router = require("express").Router();
const passport = require("../../auth");
const models = require("../../models");

router
  .route("/")
  .get((req, res) => {
    // console.log("this is req:", req)
    console.log("Authenticated User", req.user);
    res.json(req.user);
  })

router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    // console.log("this is req:", req)
    console.log("Authenticated User", req.user);
    res.json(req.user);
  }
  
  );

router
  .route("/signup")
  .post((req, res) => {
    // create new user
    models.User.create(req.body)
    .then(function(data){ 
      console.log("This is signup User inside .then", req.body);
      let user = {
        username: data.dataValues.email,
        firstName: data.dataValues.firstName,
        superlative: data.dataValues.superlative
      }
      console.log("this is the new user: ", user);
      res.json(user.username);
    })
    console.log("This is signup User", req.body);
  })

router
  .route("/logout")
  .post((req, res) => {
    req.logout();
    res.send("user logged out");
  })

module.exports = router;
