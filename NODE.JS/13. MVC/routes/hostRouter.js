// core module
// const path = require('path');

//external module
const express = require('express');
const hostRouter = express.Router();

// local module
const HomeController = require('../controllers/home');


hostRouter.get("/add/home", HomeController.getHomeAdd);
hostRouter.post("/add/home", HomeController.postHomeAdd);

exports.hostRouter = hostRouter;