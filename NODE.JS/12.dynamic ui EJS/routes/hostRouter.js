// core module
const path = require('path');

const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', {pageTitle: "Add Home to airbnb"});
})

const registerHome = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Registration successful for: ", req.body, req.body.houseName);
    registerHome.push({houseName: req.body.houseName});
    res.render('successfullAdd', {pageTitle: "Home Added Successfully"});
})

exports.hostRouter = hostRouter;
exports.registerHome = registerHome