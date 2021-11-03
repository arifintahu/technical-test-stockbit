const { Router } = require("express");
const movie = require("./movie.route");
const main = require("./main.route");

const router = Router();

router.use("/", main);
router.use("/movie", movie);

module.exports = router;
