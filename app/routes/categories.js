const express = require("express");
const { categoriesController } = require("../controllers/categoriesController");
const router = express.Router();

router.post('/categories', categoriesController);

module.exports = router
