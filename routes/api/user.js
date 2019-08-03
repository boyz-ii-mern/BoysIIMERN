const router = require("express").Router();
const userController = require("../../controllers/mockUserController");
const passport = require("../../controllers/passportController");

router
  .route("/")
  .get(userController.getAuthenticatedUser)

router
    .route("/login")
    .post(passport.authenticate("local"), userController.login);

router
    .route("/logout")
    .post(userController.logout)

module.exports = router;
