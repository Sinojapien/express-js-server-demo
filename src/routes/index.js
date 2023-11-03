const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

module.exports = router;
