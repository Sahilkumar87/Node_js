const http = require('http');

const requstServer = (req, res) => {
    // console.log("server is started....");
    console.log(req.url, req.method, req.headers);
    process.exit(); // stops event loop

}
const server = http.createServer(requstServer);


const port = 12121;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})