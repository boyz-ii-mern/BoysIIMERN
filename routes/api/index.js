const router = require("express").Router();
const userRoutes = require("./user");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const commentsRoutes = require("./comments");
const photosRoutes = require("./photos");
const superlativesRoutes = require("./superlatives");

router.use("/user", userRoutes);
router.use("/comments", commentsRoutes);
router.use("/photos", photosRoutes);
router.use("/superlatives", superlativesRoutes);
router.use("/groups", groupRoutes);
router.use("/events", eventRoutes);

module.exports = router;