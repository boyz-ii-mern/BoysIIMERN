const router = require("express").Router();

router.route("/")
    .post((req, res) => {
        // create a new comment
        res.json({ data: 'comments' })
    })
// get comments by event id
router.route("/byEvent/:id")
    .get((req, res) => {
        res.json({ data: 'comments' })
    })
    
router.route("/detail/:id")
    .delete((req, res) => {
        // delete comment
        res.json({ data: 'comments' })
    })

module.exports = router;