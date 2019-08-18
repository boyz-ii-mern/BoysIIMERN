const router = require("express").Router();
const models = require("../../models");
const { isNotNullOrUndefined } = require("../../utils")


// ## Superlatives
// ### /api/superlatives
// * GET - get all superlatives
// * POST - add new superlative
//     - *Request Body*
//         - req.body.text (str)
//         - req.body.eventId
//         - req.body.userId
//     - *Returns*
//         - new superlative
// ### /api/superlatives/byEvent/:eventId
// * GET - get all superlatives for event
// ### /api/superlatives/byUser/:userId
// * GET - get all superlatives for a user
// ### /api/superlatives/detail/:superlativeId
// * GET - get superlative details
// * PUT - update a superlative
//     - *Request Body*
//         - req.body.text (str)
//         - req.body.eventId
//         - req.body.userId
//     - *Returns*
//         - updated superlative
// * DELETE - delete superlative
//     - *Request Body*
//         - req.body.superlativeId
//     - *Returns*
//         - "ok" status
router.route("/superlatives/:eventId")
  .get(async (req, res) => {
    const id = parseInt(req.params.eventId)
    try {
      const superlatives = await models.Superlative.findAll({
        where: {
          EventId: id
        },
        include: [{
          model: models.User
        }]
      })
      res.json({
        data: {
          superlatives: superlatives
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
