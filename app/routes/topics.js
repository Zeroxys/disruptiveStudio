const express = require("express");

const { topicsCreateController, topicsDeleteController, topicsUpdateController, topicsGetAllController } = require("../controllers/topicsController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post('/topics', verifyToken('admin'), topicsCreateController);
router.delete('/topics/:id', verifyToken('admin'), topicsDeleteController);
router.put('/topics/:id', verifyToken('admin'), topicsUpdateController);
router.get('/topics', verifyToken('admin'), topicsGetAllController);

module.exports = router