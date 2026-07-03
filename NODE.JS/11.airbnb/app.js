// external module
const express = require('express');

//local module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter)



const port = 1111
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
})
