const express = require('express');

const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

const app = express();


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(hostRouter);
app.use(userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
})