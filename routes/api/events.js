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
        bannerImage: req.body.bannerImage || null,
        isActive: true,
        GroupId: req.body.GroupId,
        UserId: req.body.UserId
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
      const bannerImage = req.body.bannerImage
      const isActive = req.body.isActive
      const fields = [
        isNotNullOrUndefined(name) ? 'name' : false,
        isNotNullOrUndefined(location) != null ? 'location' : false,
        isNotNullOrUndefined(date) != null ? 'date' : false,
        isNotNullOrUndefined(bannerImage) != null ? 'bannerImage' : false,
        isNotNullOrUndefined(isActive) != null ? 'isActive' : false,
      ]
      // update event
      const eventUpdate = await models.Event.update(
        {
          name,
          location,
          date,
          bannerImage,
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


// get all event photos by event id
router.route("/photos/:eventId")
  .get(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const photos = await models.EventPhoto.findAll({
        where: {
          EventId: id
        }
      })
      res.json({
        data: {
          photos: photos
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .post(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const newPhoto = await models.EventPhoto.create({
        url: req.body.url,
        date: req.body.date,
      })
      const event = await models.Event.findByPk(id)
      await event.addEventPhoto(newPhoto)
      const photos = await models.EventPhoto.findAll({
        where: {
          EventId: id
        }
      })
      res.json({
        data: {
          photos: photos
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .delete(async (req, res) => {
    const id = parseInt(req.body.eventPhotoId)
    try {
      await models.EventPhoto.destroy({
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


// get all event comments (by event id)
router.route("/comments/:eventId")
  .get(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const comments = await models.Comment.findAll({
        where: {
          EventId: id
        },
        include: [{
          model: models.User
        }]
      })
      res.json({
        data: {
          comments: comments
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .post(async (req, res) => {
    const eventId = parseInt(req.params.eventId)
    const userId = parseInt(req.body.userId)
    try {
      await models.Comment.create({
        body: req.body.body,
        UserId: userId,
        EventId: eventId
      })
      const comments = await models.Comment.findAll({
        where: {
          EventId: eventId
        },
        include: [{
          model: models.User
        }]
      })
      res.json({
        data: {
          comments: comments
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .delete(async (req, res) => {
    const id = parseInt(req.body.commentId)
    try {
      await models.Comment.destroy({
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

module.exports = router;
