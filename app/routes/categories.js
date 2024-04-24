const express = require("express");

const { categoriesCreateController, categoriesDeleteController, categoriesUpdateController, categoriesController } = require("../controllers/categoriesController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.post('/categories', verifyToken('admin'), categoriesCreateController);
router.delete('/categories/:id', verifyToken('admin'), categoriesDeleteController);
router.put('/categories/:id', verifyToken('admin'), categoriesUpdateController);
router.get('/categories', categoriesController);


module.exports = router
