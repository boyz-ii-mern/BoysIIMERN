const router = require("express").Router();
const passport = require("../../auth");

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
  .route("/logout")
  .post((req, res) => {
    req.logout();
    res.send("user logged out");
  })

module.exports = router;
