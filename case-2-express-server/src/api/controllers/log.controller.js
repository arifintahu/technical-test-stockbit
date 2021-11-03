const { logService } = require("../services");

async function getLogs(req, res) {
  const result = await logService.getLogs().catch((err) => {
    console.error(err);
    res.status(500).end();
  });
  res.json(result);
}

module.exports = {
  getLogs,
};
