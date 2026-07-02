const express = require('express');

const app = express();

const port = 8888;

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`);

});

app.get('/fruit', (req, res, next) => {
    // res.send("Mango and apple");
    res.send({
        sahil: "kumar",
        age: 21,
    });
});