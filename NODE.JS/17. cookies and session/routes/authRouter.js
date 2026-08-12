// External Module
const express = require("express");
const authRouter = express.Router();

// Local Module
const authControuler = require("../controllers/authController");

authRouter.get("/login", authController.getLogin);

module.exports = authRouter;
