const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve("./src/views/index.html"));
});

module.exports = router;
