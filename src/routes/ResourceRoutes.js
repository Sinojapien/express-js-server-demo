const router = require("express").Router();
const { get, create, remove } = require("../controllers/ResourceController");

const BASE_ROUTE = "/resource";

// Reading resource
router.get(`${BASE_ROUTE}/:id`, get);

// Creating resource
router.post(`${BASE_ROUTE}/:id/create`, create);

// Deleting resource
router.delete(`${BASE_ROUTE}/:id/delete`, remove);

module.exports = router;
