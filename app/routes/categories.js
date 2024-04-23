const express = require("express");

const { categoriesController } = require("../controllers/categoriesController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post('/categories', verifyToken('admin'), categoriesController);

module.exports = router
