const express = require("express");
const routes = require("../api/routes/v1");
const { API } = require("../constants");

function expressConfig(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(`/${API}`, routes);

  return app;
}

module.exports = expressConfig;
