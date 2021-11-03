const constants = {
  PORT: parseInt(process.env.PORT) || 3000,
  API: process.env.API || "api/v1",
  OMDB_KEY: process.env.APIKEY || "faf7e5bb",
  OMDB_API: process.env.OMDB_API || "http://www.omdbapi.com",
  DB_URL: process.env.DB_URL || "mysql://root@localhost/test",
};

module.exports = constants;
