const router = require("express").Router();
const userRoutes = require("./user");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const superlativeRoutes = require("./superlatives");
const twilioRoutes = require("./twilio");

router.use("/user", userRoutes);
router.use("/groups", groupRoutes);
router.use("/events", eventRoutes);
router.use("/superlatives", superlativeRoutes);
router.use("/twilio", twilioRoutes);

module.exports = router;