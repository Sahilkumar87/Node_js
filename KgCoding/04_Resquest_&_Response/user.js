const http = require('http');
const fs = require('fs');

// function requestListenner(req, res){
//     console.log(req);
// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);


    if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name"><br>');
    res.write('<label for="male">Male </label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female </label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    res.end();
    }
    else if(req.url === '/product'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1> Checkout our products </h1></body>');
    res.write('<html>');
    return res.end();
    } 
    else if(req.url.toLowerCase() === "/submit-details" 
            && req.method == "POST"){
            fs.writeFileSync('user.txt', 'Sneha');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
    }

    else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1> hii Sneha kaise ho? </h1></body>');
    res.write('<html>');
    return res.end();
    }
//  process.exit();

});


const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});