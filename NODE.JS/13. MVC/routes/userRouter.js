// core module
const path = require('path');
// external module
const express = require('express');
const userRouter = express.Router();

//local module
const HomeController = require('../controllers/home')


userRouter.get("/", HomeController.getHome);

module.exports = userRouter;