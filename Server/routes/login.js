const express = require("express");

const loginControllers = require("../controllers/login");

const router = express.Router();

router.post("/login", loginControllers.loginUser);

module.exports = router;
