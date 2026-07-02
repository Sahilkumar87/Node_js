// Core module
// const http = require('http');

// External module
const express = require('express');


//Local module
const requestHandler= require('./user');

const app = express();
app.get("/", (req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    // res.send(`<p>came from first</p>`);
    next();
});

app.post("/submit-details", (req, res, next) => {
    console.log("Came in second middleware", req.url, req.method);
    res.send(`<p>Welcome to Node.js Series`);
});


app.use("/", (req, res, next) => {
    console.log("Came from another middleware", req.url, req.method);
    res.send(`<p>another response</p>`);
});





// const server = http.createServer(app);

const port = 55555;
app.listen(port, () => {
    console.log(`Server running on address http://localhost:${port}`);
})