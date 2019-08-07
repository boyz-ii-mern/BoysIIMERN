const router = require("express").Router();

router
  .route("/byUser/:id")
  .get((req, res) => {
    res.json({ ok: 'groups' })
  })

router
  .route("/detail/:id")
  .get((req, res) => {
    res.json({ ok: 'groups' })
  })


module.exports = router;
