// Core module
// const http = require('http');

// External module
const express = require('express');


//Local module
const requestHandler= require('./user');

const app = express();
app.use("/", (req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    next();
});


app.use("/", (req, res, next) => {
    console.log("Came from another middleware", req.url, req.method);
    next();
    res.send(`<p>anoter response`);
});



app.use("/submit-details", (req, res, next) => {
    console.log("Came in second middleware", req.url, req.method);
    res.send(`<p>Welcome to Node.js Series`);

});

// const server = http.createServer(app);

const port = 55555;
app.listen(port, () => {
    console.log(`Server running on address http://localhost:${port}`);
})