const http = require('http');
const testingSyntax = require('./syntax');
const runtime = require('./runtimeError');
const logical = require('./logical');


const requestServer = (req, res) => {
    console.log("server start...");
    // testingSyntax();
    // runtime();
    logical();
}

const server = http.createServer(requestServer);

const port = 5173
server.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
})
