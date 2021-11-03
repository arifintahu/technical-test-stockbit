const { logRepository } = require("../repositories");
function logging(req, res, next) {
  logRepository
    .createLog({
      method: req.method,
      endpoint: req.originalUrl,
    })
    .then(() => {
      next();
    });
}

module.exports = logging;
