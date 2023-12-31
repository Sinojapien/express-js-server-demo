const router = require("express").Router();
const { get, create, update, remove } = require("../controllers/resource");

const BASE_ROUTE = "/resources";

// Reading resource
router.get(`${BASE_ROUTE}/:id`, require("../middlewares/cache"), get);

// Creating resource
router.post(`${BASE_ROUTE}`, require("../middlewares/no-cache"), create);

// Updating resource
router.patch(`${BASE_ROUTE}/:id`, require("../middlewares/no-cache"), update);

// Deleting resource
router.delete(`${BASE_ROUTE}/:id`, require("../middlewares/no-cache"), remove);

module.exports = router;
