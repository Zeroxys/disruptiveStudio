const express = require("express");

const { topicsController } = require("../controllers/topicsController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post('/topics', verifyToken('admin'), topicsController);

module.exports = router