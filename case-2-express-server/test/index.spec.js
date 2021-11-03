const request = require("supertest");
const createServer = require("../src/server");
const { API } = require("../src/constants");

const app = createServer();

describe("Server checks", () => {
  it("Server is created without error", (done) => {
    request(app).get(`/${API}`).expect(200, done);
  });
});
