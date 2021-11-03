function searchMovies(params) {
  if (!params.key) {
    return false;
  }
  return true;
}

function getDetailMovie(params) {
  if (!params.id) {
    return false;
  }
  return true;
}

module.exports = {
  searchMovies,
  getDetailMovie,
};
