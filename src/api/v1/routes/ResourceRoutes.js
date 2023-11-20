const router = require("express").Router();
const {
  get,
  create,
  update,
  remove,
} = require("../controllers/ResourceController");

const BASE_ROUTE = "/resource";

// Reading resource
router.get(`${BASE_ROUTE}/:id`, require("../middlewares/cache"), get);

// Creating resource
router.post(
  `${BASE_ROUTE}/:id/create`,
  require("../middlewares/noCache"),
  create
);

// Updating resource
router.patch(
  `${BASE_ROUTE}/:id/update`,
  require("../middlewares/noCache"),
  update
);

// Deleting resource
router.delete(
  `${BASE_ROUTE}/:id/delete`,
  require("../middlewares/noCache"),
  remove
);

module.exports = router;
