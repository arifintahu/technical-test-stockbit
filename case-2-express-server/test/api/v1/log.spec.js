const request = require("supertest");
const createServer = require("../../../src/server");
const { API } = require("../../../src/constants");

const app = createServer();
describe("Check log routes", () => {
  it("Get logs return without error", (done) => {
    request(app).get(`/${API}/log`).expect(200, done);
  });
});
