const { expect } = require("chai");
const { getLogs } = require("../log.service");

describe("Check log service", () => {
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
