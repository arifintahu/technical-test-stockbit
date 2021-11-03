const { expect } = require("chai");
const { searchMovies, getDetailMovie } = require("../movie.service");

describe("Check movie service", () => {
  it("Search movie returns movies", () => {
    searchMovies({
      key: "Batman",
      page: 2,
    })
      .then((result) => {
        expect(result).to.include({
          Response: "True",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });
  it("Detail movie returns a movie detail", () => {
    const id = "tt4853102";
    getDetailMovie({
      id: id,
    })
      .then((result) => {
        expect(result).to.include({
          imdbID: id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
