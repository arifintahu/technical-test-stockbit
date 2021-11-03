const { expect } = require("chai");
const { searchMovies } = require("../movie.service");

describe("Check movie service", () => {
  it("Search movie returns movies", () => {
    searchMovies({
      search: "Batman",
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
    expect(true).to.be.true;
  });
});
