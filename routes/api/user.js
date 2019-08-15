const router = require("express").Router();
const { passport, isAuthenticated } = require("../../auth");
const models = require("../../models");

router
  .route("/")
  .get((req, res) => {
    // console.log("this is req:", req)
    console.log("Authenticated User", req.user);
    res.json(req.user);
  })

router
  .route("/all")
  // get all users in order to create a group
  .get(isAuthenticated, (req, res) => {
    res.json({ data: 'users' })
  })

// for user profile
// get memberships
router.route("/profile/:userId")
  .get(async (req, res) => {
    const id = parseInt(req.params.userId)
    try {
      const user = await models.User.findByPk(id, {
        include: [{
          model: models.Event
        }]
      })
      const memberships = await models.Membership.findAll({
        where: {
          UserId: user.id
        }
      })
      // get groups
      const groupQueries = memberships.map(m => models.Group.findByPk(m.GroupId))
      const groups = await Promise.all(groupQueries)
      res.json({
        data: {
          user: user,
          groups: groups
          // also add winning superlatives from past events
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.toString() })
    }
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
      .then(function (data) {
        console.log("This is signup User inside .then", req.body);
        console.log("this is signup data:", data);
        let user = {
          username: data.dataValues.email,
          firstName: data.dataValues.firstName,
          superlative: data.dataValues.superlative
        }
        console.log("this is the new user.username: ", user.username);
        res.json(user.username);
      })
  })

router
  .route("/logout")
  .post((req, res) => {
    req.logout();
    res.send("user logged out");
  })

module.exports = router;
