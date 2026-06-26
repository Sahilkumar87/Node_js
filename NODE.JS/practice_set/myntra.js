const http = require('http');

const reqServer = (req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url === '/'){
        res.setHeaders('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Myntra App</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to Home</h1>");
        res.write("</body>")
        res.write("</html>");
        return res.end();
    }
    else if(req.url.toLowerCase() === '/men'){
        res.setHeaders('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Myntra App</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to Men</h1>");
        res.write("</body>")
        res.write("</html>");
        return res.end();

    }
    else if(req.url.toLowerCase() === "/women"){
        
        res.setHeaders('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Myntra App</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to Women</h1>");
        res.write("</body>")
        res.write("</html>");
        return res.end();
    }
}

const server = http.createServer(reqServer);
const port = 12121;
server.listen(port, () => {
    console.log(`server is running at port http://localhost:${port}`);
});
