const router = require("express").Router();
const heroRoutes = require("./heroes");

// Book routes
router.use("/heroes", heroRoutes);

module.exports = router;
