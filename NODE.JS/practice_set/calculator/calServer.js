const http = require('http');
const requestHandler= require('./calculator');


const server = http.createServer(requestHandler);

const port = 55555;
server.listen(port, () => {
    console.log(`Server running on address http://localhost:${port}`);
})