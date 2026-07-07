// external module
const express = require('express');
const app  = express();
const path = require('path');

// local module
const contact = require('./routes/contact');

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded());

app.use(contact);   // use method work 
// app.get(contact);
// app.post(contact);





const port = 1234;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
