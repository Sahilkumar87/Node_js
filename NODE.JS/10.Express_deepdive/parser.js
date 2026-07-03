const express = require('express');
const app  = express();
const bodyParser = require('body-parser');


app.use((req, res, next) => {
    console.log("first dummy Middleware", req.url, req.method);
    // res.send(`<p>came from first</p>`);
    next();
});

app.use((req, res, next) => {
    console.log("second dummy Middleware", req.url, req.method);
    // res.send(`<p>came from second</p>`);
    next();
});

// app.use("/", (req, res, next) => {
//     console.log("third middleware", req.url, req.method);
//     // res.send("<h1>came from third</h1>");
//     next();
// });


app.get("/", (req, res, next) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send("<h1>Welcome to complete coding</h1>");
});




app.get("/contact-us", (req, res, next) => {
    console.log("handling / contact-us for get", req.url, req.method);
    res.send(`<h1>please give your details</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your Email"/>
        <input type="Submit"/>
        </form>
        `);
});

app.post("/contact-us", (req, res, next) => {
     console.log("first handling", req.url, req.method, req.body);
     next();
});


app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
     console.log("handling / contact-us for POST", req.url, req.method, req.body);
     res.send(`<h1>thanks for your details</h1>`);
});






const port = 1234;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
