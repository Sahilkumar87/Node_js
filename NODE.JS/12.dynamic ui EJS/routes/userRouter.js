// core module
const path = require('path');
// external module
const express = require('express');
const userRouter = express.Router();

//local module

const { registerHome } = require('./hostRouter')

userRouter.get("/", (req, res, next) => {
    console.log(registerHome);
    res.render('home', {registerHome: registerHome, pageTile: "airbnb Home"});
});

module.exports = userRouter;