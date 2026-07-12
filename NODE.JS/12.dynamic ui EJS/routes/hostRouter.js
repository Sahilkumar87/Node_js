// core module
const path = require('path');

const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add/home", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", 'views', 'addHome.html'));
})

const registerHome = [];

hostRouter.post("/add/home", (req, res, next) => {
    console.log("Home Registration successful for: ", req.body, req.body.houseName);
    registerHome.push({houseName: req.body.houseName});
    res.sendFile(path.join(__dirname, '../', 'views', 'successfullAdd.html'));
})

exports.hostRouter = hostRouter;
exports.registerHome = registerHome