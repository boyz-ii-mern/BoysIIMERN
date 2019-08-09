const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");

// User routes
router.use("/user", userRoutes);



// Home/Profile Page
router.use("/profile", profileRoutes);

router.use("/groups", groupRoutes);

router.use("/events", eventRoutes);

    

module.exports = router;