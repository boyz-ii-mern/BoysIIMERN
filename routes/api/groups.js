const router = require("express").Router();
const models = require("../../models")
const { throwIfNull } = require("../../utils")

router.route("/")
  .post(async (req, res) => {
    try {
      const group = await models.Group.create({
        name: req.body.name,
        bannerImage: req.body.bannerImage || null
      })
      const memberQueries = req.body.members.map(userId => models.Membership.create({
        UserId: userId,
        GroupId: group.id
      }))
      const userQueries = req.body.members.map(userId => models.User.findByPk(userId))
      const memberships = await Promise.all(memberQueries)
      const users = await Promise.all(userQueries)
      res.json({
        data: {
          groupInfo: group,
          members: users
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.toString() })
    }
  })

router
  .route("/byUser/:userId")
  .get(async (req, res) => {
    // get groups by User
    const id = parseInt(req.params.userId)
    try {
      const memberships = await models.Membership.findAll({
        where: {
          UserId: id
        }
      })
      const groupQueries = memberships.map(m =>
        models.Group.findByPk(m.GroupId, {
          include: [{
            model: models.Event,
          }]
        })
      )
      const groups = await Promise.all(groupQueries)
      res.json({
        data: {
          groups: groups
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.toString() })
    }
  })

router
  .route("/members/:groupId")
  // sending members for a particular group
  .get(async (req, res) => {
    const id = parseInt(req.params.groupId)
    try {
      const memberships = await models.Membership.findAll({
        where: {
          GroupId: id
        }
      })
      const userQueries = memberships.map(m => models.User.findByPk(m.UserId))
      const users = await Promise.all(userQueries)
      res.json({
        data: {
          members: users
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.toString() })
    }
  })
  .post(async (req, res) => {
    try {
      // TODO: if user already in group, should NOT be added again
      const groupId = parseInt(req.params.groupId)
      const userId = parseInt(req.body.newMember)
      const newMembership = await models.Membership.create({
        UserId: userId,
        GroupId: groupId
      })
      const memberQueries = await models.Membership.findAll({
        where: {
          GroupId: groupId
        }
      })
      const memberships = await Promise.all(memberQueries)
      const userQueries = memberships.map(m => models.User.findByPk(m.UserId))
      const users = await Promise.all(userQueries)
      res.json({
        data: {
          members: users
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err })
    }
  })
  .delete(async (req, res) => {
    try {
      const groupId = parseInt(req.params.groupId)
      const userId = parseInt(req.body.deleteMember)
      const deleteMembership = await models.Membership.destroy({
        where: {
          UserId: userId,
          GroupId: groupId
        }
      })
      const memberQueries = await models.Membership.findAll({
        where: {
          GroupId: groupId
        }
      })
      const memberships = await Promise.all(memberQueries)
      const userQueries = memberships.map(m => models.User.findByPk(m.UserId))
      const users = await Promise.all(userQueries)
      res.json({
        data: {
          members: users
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err })
    }
  })

router
  .route("/detail/:id")
  // sending all details for this group
  .get(async (req, res) => {
    const id = parseInt(req.params.id)
    try {
      const group = await models.Group.findByPk(id, {
        include: [{
          model: models.Event,
        }]
      })
      throwIfNull(group, "Group Not Found")
      const memberships = await models.Membership.findAll({
        where: {
          GroupId: id
        }
      })
      const userQueries = memberships.map(m => models.User.findByPk(m.UserId))
      const users = await Promise.all(userQueries)
      res.json({
        data: {
          groupInfo: group,
          members: users
        }
      })
    } catch (err) {
      console.log(err)
      res.json({ error: err.message })
    }
  })
  .delete(async (req, res) => {
    try {
      const groupId = parseInt(req.params.id)
      const deleteGroup = await models.Group.destroy({
        where: {
          id: groupId
        }
      })
      const deleteMembers = await models.Membership.destroy({
        where: {
          GroupId: groupId
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
