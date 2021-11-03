const { Router } = require("express");
const { movieController } = require("../../controllers");

const router = Router();

router.get("/search", (req, res) => {
  movieController.searchMovies(req, res);
});
router.get("/detail/:id", (req, res) => {
  movieController.getDetailMovie(req, res);
});

module.exports = router;
