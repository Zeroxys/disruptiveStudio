const express = require("express");

const { userController, userLoginController } = require("../controllers/userController");
const router = express.Router();

router.post('/register', userController);
router.post('/login', userLoginController);

module.exports = router
