const { Router } = require("express");

const router = Router();

router.get("/search", (req, res) => {
  res.sendStatus(200);
});
router.get("/detail", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
