const { Router } = require("express");
const { logging } = require("../../middlewares");
const { logController } = require("../../controllers");

const router = Router();

router.get("/", [logging], (req, res) => {
  logController.getLogs(req, res);
});

module.exports = router;
