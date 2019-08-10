const router = require("express").Router();

router.route("/")
  .post((req, res) => {
    // create new event
    res.json({ data: 'events' })
  })

router.route("/byUser/:id")
  .get((req, res) => {
    res.json({ data: 'events' })
  })

router.route("/byGroup/:id")
  .get((req, res) => {
    res.json({ data: 'events' })
  })

router.route("/detail/:id")
  .get((req, res) => {
    //this should include all event info, all pictures, all comments, all superlatives (pictures)
    res.json({ data: 'events' })
  })
  .put((req, res) => {
    // edit the event
    // could include adding superlatives, adding pictures, voting, adding comments
    res.json({ data: 'events' })
  })
  .delete((req, res) => {
    // delete event
    res.json({ data: 'events' })
  })



// get photos by event id
router.route("/photos/:id")
  .get((req, res) => {
    res.json({ data: 'photos' })
  })
  .post((req, res) => {
    // create a new photo
    res.json({ data: 'photos' })
  })
  .delete((req, res) => {
    // delete a photo
    res.json({ data: 'photos' })
  })

module.exports = router;
