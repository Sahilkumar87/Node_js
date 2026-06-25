const http = require('http');

const requstServer = (req, res) => {
    // console.log("server is started....");
    console.log(req.url, req.method, req.headers);

    if(req.url === '/'){
    res.setHeader('Constent-type', "text/html");
    res.write('<html>');
    res.write('<head><title>My app</title></head>');
    res.write('<body><h1>Enter Your Details: </h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"/><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="Submit"/>');
    




    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    }
    else if(req.url === '/product'){
    res.setHeader('Constent-type', "text/html");
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> Welcome to Product Section </h1></body>');
    res.write('</html>');
    return res.end();
    }
    else{
        
    res.setHeader('Constent-type', "text/html");
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1> Welcome to my Page </h1></body>');
    res.write('</html>');
    return res.end();
    }



};


const server = http.createServer(requstServer);
const port = 12121;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});