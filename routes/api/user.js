const router = require("express").Router();
const passport = require("../../auth");
const models = require("../../models");

router
  .route("/")
  .get((req, res) => {
    console.log("Authenticated User", req.user);
    res.json(req.user);
  })

router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log("Authenticated User", req.user);
    res.json(req.user);
  });

router
  .route("/signup")
  .post((req, res) => {
    // create new user
    console.log("this is models: ", models)
    models.User.create(req.body)
    .then(function(data){ 
      console.log(data);
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
