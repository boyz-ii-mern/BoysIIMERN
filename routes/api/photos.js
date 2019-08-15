const router = require("express").Router();

router.route("/")
  .post((req, res) => {
    // create a new photo
    res.json({ data: 'photos' })
  })

// get photos by event id
router.route("/byEvent/:id")
  .get((req, res) => {
    res.json({ data: 'photos' })
  })

router.route("/detail/:id")
  .delete((req, res) => {
    // delete a photo
    res.json({ data: 'photos' })
  })

module.exports = router;