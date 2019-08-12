const router = require("express").Router();
const models = require("../../models");
const fakeDb = require("../../config/fakedb")

router.route("/")
  .post((req, res) => {
    // create new event
    res.json({ data: 'events' })
  })

router.route("/byUser/:userId")
  .get((req, res) => {
    res.json({ data: 'events' })
  })

router.route("/byGroup/:groupId")
  .get((req, res) => {
    // res.json(fakeDb.getEventsByGroup)
    const id = parseInt(req.params.groupId)
    models.Group.findByPk(id, {
      include: [{
        model: models.Image,
        as: 'Banner'
      }, {
        model: models.Event
      }]
    })
      .then(group => {
        res.json({ data: group.Events })
      }).catch(
        console.log
      )
  })

router.route("/detail/:eventId")
  .get((req, res) => {
    //this should include all event info, all pictures, all comments, all superlatives (pictures)
    const id = parseInt(req.params.eventId)
    models.Event.findByPk(id, {
      include: [{
        model: models.User,
        as: 'Admin'
      }, {
        model: models.Group
      }]
    })
      .then(event => {
        res.json({ data: event })
      }).catch(
        console.log
      )
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
