const fetch = require("node-fetch");
const { APIKEY } = require("../../constants");

function searchMovies(params) {
  const { search, page } = params;
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}&page=${page}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getDetailMovie() {
  return;
}

module.exports = {
  searchMovies,
  getDetailMovie,
};
