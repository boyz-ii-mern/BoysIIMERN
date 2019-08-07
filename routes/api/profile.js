const router = require("express").Router();

router.route("/:id")
  .get((req, res) => {
      res.json({ ok: 'profile' })
  })


module.exports = router;
