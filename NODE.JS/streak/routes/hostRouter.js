const express = require('express');

const host = express.Router();

// host.use("/", (req, res, next) => {
//     res.send(`
//         <h1>Welcome to airbnb</h1>
//         <a href="user-rent-home">rent home</a>
//         <a href="host-add-home">add home</a>
//         `);
// });

host.get("/host/add/home", (req, res, next) => {
    res.send(`<form action="/host/add/home" method="POST">
        <input type="text" name="home-name" placeholder="Enter your home details"/>
        <input type="Submit"/>
        </form>
        `)
});

host.post("/host/add/home", (req, res, next) => {
    console.log(req.body);
    res.send(`
        <h1> home added sucessfully</h1>
        <a href="/">go to home page</a>`)
})


module.exports = host;