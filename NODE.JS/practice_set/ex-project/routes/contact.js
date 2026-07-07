const express = require('express');
const path = require('path');

const app = express();

const contact = express.Router();

contact.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});

contact.get("/contact-us",(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
});

contact.post("/contact-us", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'afterRes.html'))
});


contact.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../' ,'views', '404page.html'));
        });




module.exports = contact;
