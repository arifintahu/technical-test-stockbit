const { expect } = require("chai");
const { createLog } = require("../log.repository");

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
});
