const express = require('express');
const user = express.Router();

user.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href="user/rent/home">rent home</a>
        <br/>
        <a href="host/add/home">add home</a>
        `);
});

user.get("/user/rent/home", (req, res, next) => {
    res.send(`
        <h1>choose home</h1>
        <a href="/">go to home</a>
        `);
});






module.exports = user;