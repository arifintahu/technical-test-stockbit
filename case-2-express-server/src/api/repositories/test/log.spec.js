const { expect } = require("chai");
const { createLog, getLogs } = require("../log.repository");

describe("Check log repository", () => {
  it("Create log returns true", () => {
    createLog({
      method: "GET",
      endpoint: "/api/v1/test",
    })
      .then((result) => {
        expect(result).to.be.true;
      })
      .catch((err) => {
        console.error(err);
      });
  });
  it("Get logs returns logs", () => {
    getLogs()
      .then((result) => {
        expect(result).to.be.an("array");
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
