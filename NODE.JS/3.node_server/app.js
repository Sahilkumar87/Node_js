// // simple node.js server
// const http = require('http');

// const  requestServer = (req, res) => {
//     console.log('server start...');
// }
 
// const server = http.createServer(requestServer);

// const port = 2122;
// server.listen(port, () => {
//     console.log(`Server running on address http://localhost:${port}`)
// });


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);
