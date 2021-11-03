const fetch = require("node-fetch");
const { OMDB_KEY, OMDB_API } = require("../../constants");

function searchMovies(params) {
  const { key, page } = params;
  return new Promise((resolve, reject) => {
    fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&s=${key}&page=${page}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getDetailMovie(params) {
  const { id } = params;
  return new Promise((resolve, reject) => {
    fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&i=${id}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  searchMovies,
  getDetailMovie,
};
