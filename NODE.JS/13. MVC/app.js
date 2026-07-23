//core module
const path = require('path');


// external module
const express = require('express');

//local module
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');
const errorController = require('./controllers/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');




app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});



app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorController.error);





const port = 1111
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
})
