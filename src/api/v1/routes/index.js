const router = require("express").Router();
const resourceRouter = require("./ResourceRoutes");

router.use("/", resourceRouter);

module.exports = router;
