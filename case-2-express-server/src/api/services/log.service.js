const { logRepository } = require("../repositories");

function getLogs() {
  return new Promise((resolve, reject) => {
    logRepository
      .getLogs()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  getLogs,
};
