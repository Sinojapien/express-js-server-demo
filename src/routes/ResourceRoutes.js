const router = require("express").Router();
const { get, create, remove } = require("../controllers/ResourceController");

const BASE_ROUTE = "/resource";

// Reading resource
router.get(`${BASE_ROUTE}/:id`, require("../middleware/cache"), get);

// Creating resource
router.post(
  `${BASE_ROUTE}/:id/create`,
  require("../middleware/noCache"),
  create
);

// Deleting resource
router.delete(
  `${BASE_ROUTE}/:id/delete`,
  require("../middleware/noCache"),
  remove
);

module.exports = router;
