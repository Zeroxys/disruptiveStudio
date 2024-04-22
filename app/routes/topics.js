const express = require("express");
const { topicsController } = require("../controllers/topicsController");
const router = express.Router();

router.post('/topics', topicsController);

module.exports = router