const router = require("express").Router();
const resourceRouter = require("./resource");

router.use("/", resourceRouter);

module.exports = router;
