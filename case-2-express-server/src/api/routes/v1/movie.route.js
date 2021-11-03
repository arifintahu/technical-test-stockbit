const { Router } = require("express");
const { logging } = require("../../middlewares");
const { movieController } = require("../../controllers");

const router = Router();

router.get("/search", [logging], (req, res) => {
  movieController.searchMovies(req, res);
});
router.get("/detail/:id", [logging], (req, res) => {
  movieController.getDetailMovie(req, res);
});

module.exports = router;
