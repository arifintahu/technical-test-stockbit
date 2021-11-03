const constants = {
  PORT: parseInt(process.env.PORT) || 3000,
  API: process.env.API || "api/v1",
  APIKEY: process.env.APIKEY || "faf7e5bb",
  DB_URL: process.env.DB_URL || "mysql://root@localhost/test",
};

module.exports = constants;
