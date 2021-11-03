const { movieService } = require("../services");

async function searchMovies(req, res) {
  const { key, page } = req.query;
  const result = await movieService.searchMovies({ key, page }).catch((err) => {
    console.error(err);
    res.status(400);
  });
  res.json(result);
}

async function getDetailMovie(req, res) {
  const id = req.params.id;
  const result = await movieService.getDetailMovie({ id }).catch((err) => {
    console.error(err);
    res.status(400);
  });
  res.json(result);
}

module.exports = {
  searchMovies,
  getDetailMovie,
};
