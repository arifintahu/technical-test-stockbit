const { expect } = require("chai");
const request = require("supertest");
const createServer = require("../../../src/server");
const { API } = require("../../../src/constants");

const app = createServer();
describe("Check movie routes", () => {
  it("Search movie gives result without errror", (done) => {
    const key = "Batman";
    const page = 2;
    request(app)
      .get(`/${API}/movie/search?key=${key}&page=${page}`)
      .expect(200, done);
  });
  it("Search movie gives error 400 if no query", (done) => {
    request(app).get(`/${API}/movie/search`).expect(400, done);
  });
  it("Detail movie gives result without errror", (done) => {
    const id = "tt4853102";
    request(app).get(`/${API}/movie/detail/${id}`).expect(200, done);
  });
  it("Detail movie gives error 404 if no params id]", (done) => {
    request(app).get(`/${API}/movie/detail`).expect(404, done);
  });
});
