const { connection } = require("../../config/database");

function createLog(params) {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO logs (method, endpoint)
      VALUES (?, ?)
    `;
    connection.query(query, [params.method, params.endpoint], function (error) {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(true);
    });
  });
}

function getLogs() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT * FROM logs
    `;
    connection.query(query, function (error, results) {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = {
  createLog,
  getLogs,
};
