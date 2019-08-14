const router = require("express").Router();
const models = require("../../models");
const { isNotNullOrUndefined } = require("../../utils")


router.route("/")
  .post(async (req, res) => {
    const groupId = parseInt(req.body.groupId)
    const userId = parseInt(req.body.userId)
    try {
      const event = await models.Event.create({
        name: req.body.name,
        location: req.body.location,
        date: req.body.date,
        isActive: true
      })
      const setGroup = event.setGroup(groupId)
      const setAdmin = event.setUser(userId)
      const setAssociations = await Promise.all([setGroup, setAdmin])
      res.json({ data: event })
    } catch (err) {
      console.log(err)
      res.json({ error: err.toString() })
    }
  })

router.route("/byUser/:userId")
  .get(async (req, res) => {
    const id = parseInt(req.params.userId)
    try {
      const user = await models.User.findByPk(id, {
        include: [{
          model: models.Event
        }]
      })
      res.json({ data: user.Events })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })

router.route("/byGroup/:groupId")
  .get(async (req, res) => {
    const id = parseInt(req.params.groupId)
    try {
      const group = await models.Group.findByPk(id, {
        include: [{
          model: models.Event
        }]
      })
      res.json({ data: group.Events })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })

router.route("/detail/:eventId")
  .get(async (req, res) => {
    // TODO: this should include all event info, all pictures, all comments, all superlatives (pictures)
    const id = parseInt(req.params.eventId)
    try {
      const event = await models.Event.findByPk(id, {
        include: [{
          model: models.User,
        }, {
          model: models.Group
        }]
      })
      res.json({ data: event })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .put(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const name = req.body.name
      const location = req.body.location
      const date = req.body.date
      const isActive = req.body.isActive
      const fields = [
        isNotNullOrUndefined(name) ? 'name' : false,
        isNotNullOrUndefined(location) != null ? 'location' : false,
        isNotNullOrUndefined(date) != null ? 'date' : false,
        isNotNullOrUndefined(isActive) != null ? 'isActive' : false,
      ]
      // update event
      const eventUpdate = await models.Event.update(
        {
          name,
          location,
          date,
          isActive
        }, {
          where: {
            id: id
          },
          fields: fields.filter(f => f != false)
        }
      )
      const updatedEvent = await models.Event.findByPk(id)
      res.json({ data: updatedEvent })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .delete(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const deleteEvent = await models.Event.destroy({
        where: {
          id: id
        }
      })
      res.json({
        status: "ok"
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })

// TODO: ALL THIS
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
