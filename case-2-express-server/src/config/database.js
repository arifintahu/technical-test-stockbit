const mysql = require("mysql");
const { DB_URL } = require("../constants");
const connection = mysql.createConnection(DB_URL);

function initialize() {
  return new Promise((resolve, reject) => {
    const query = `
      CREATE TABLE IF NOT EXISTS logs (
        id INT NOT NULL auto_increment,
        method VARCHAR(255) NOT NULL,
        endpoint TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      )
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
  initialize,
  connection,
};
