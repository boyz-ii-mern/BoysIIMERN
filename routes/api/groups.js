const router = require("express").Router();

router.route("/")
.post((req, res) => {
  // create a group
    res.json({ data: 'groups' })
  })

router
  .route("/byUser/:id")
  .get((req, res) => {
    res.json({ data: 'groups' })
  })

router
  .route("/detail/:id")
  .get((req, res) => {
    res.json({ data: 'groups' })
  })


module.exports = router;
