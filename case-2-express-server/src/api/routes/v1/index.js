const { Router } = require("express");
const movie = require("./movie.route");
const main = require("./main.route");
const log = require("./log.route");

const router = Router();

router.use("/", main);
router.use("/movie", movie);
router.use("/log", log);

module.exports = router;
