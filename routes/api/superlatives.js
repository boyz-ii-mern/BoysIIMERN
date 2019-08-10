const router = require("express").Router();

router.route("/")
    .post((req, res) => {
        // create a new superlative
        res.json({ data: 'superlatives' })
    })

router.route("/superlatives/:id")
    .get((req, res) => {
        res.json({ data: 'superlatives' })
    })

router.route("/detail/:id")
    .delete((req, res) => {
        // delete a superlative
        res.json({ data: 'superlatives' })
    })

module.exports = router;