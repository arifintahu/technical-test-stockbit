const { movieService } = require("../services");
const { movieValidation } = require("../validations");

async function searchMovies(req, res) {
  const key = req.query.key;
  const page = req.query.page;
  if (movieValidation.searchMovies({ key })) {
    const result = await movieService
      .searchMovies({
        key: key,
        page: page ? page : 1,
      })
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
    res.json(result);
  } else {
    res.status(400).end();
  }
}

async function getDetailMovie(req, res) {
  const id = req.params.id;
  if (movieValidation.getDetailMovie({ id })) {
    const result = await movieService.getDetailMovie({ id }).catch((err) => {
      console.error(err);
      res.status(500).end();
    });
    res.json(result);
  } else {
    res.status(400).end();
  }
}

module.exports = {
  searchMovies,
  getDetailMovie,
};
