const http = require('http');
const express = require('express');

const app  = express();
app.get("/", (req, res, next) => {
    console.log("home page");
    res.send(`<p>came from first</p>`);
    next();
});

app.post("/contact-us", (req, res, next) => {
    console.log("contact page");
    res.send("<p>came from second</p>");
    next();
});

app.use("/about-us", (req, res, next) => {
    console.log("about page");
    res.send("<p>came from third</p>");
    next();
});






const port = 12323;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

const reqserver = (req, res, next) => {

}