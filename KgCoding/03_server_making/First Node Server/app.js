const http = require('http');

// function requestListenner(req, res){
//     console.log(req);
// }

const server = http.createServer((req, res) => {
    console.log(req  );
//    process.exit();
});


const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});