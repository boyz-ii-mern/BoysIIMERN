const router = require("express").Router();
const models = require("../../models");


router.route("/byEvent/:eventId")
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
            await models.Superlative.create({
                text: req.body.text,
                UserId: userId,
                EventId: eventId
            })
            const superlatives = await models.Superlative.findAll({
                where: {
                    EventId: eventId
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

router.route("/byUser/:userId")
.get(async (req, res) => {
    const id = parseInt(req.params.userId)
    try {
        const superlatives = await models.Superlative.findAll({
            where: {
                UserId: id
            },
            include: [{
                model: models.Event
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

router.route("/detail/:superlativeId")
    .get(async (req, res) => {
        const id = parseInt(req.params.superlativeId)
        try {
            const superlative = await models.Superlative.findByPk(id, {
                include: [{
                    model: models.User,
                }, {
                    model: models.Event
                }]
            })
            res.json({ data: superlative })
        } catch (err) {
            console.log(err)
            res.json({ error: err.message })
        }
    })
    .delete(async (req, res) => {
        const id = parseInt(req.params.superlativeId)
        try {
            await models.Superlative.destroy({
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
