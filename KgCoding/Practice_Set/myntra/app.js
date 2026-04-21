const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req.url, req.method');
    if(req.url === '/home'){
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    }
    else if(req.url === '/men'){
        res.write('<h1>Welcome to men Section</h1>');
        return res.end();
    }
    else if(req.url === '/women'){
        res.write('<h1>Welcome to women Section</h1>');
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write('<h1>Welcome to Kids Section</h1>');
        return res.end();
    }
    else if(req.url === '/cart'){
        res.write('<h1>Add to Cart</h1>');
        return res.end();
    }

    res.write(`
<html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">cart</a></li>
        </ul>
    </nav>
</body>
</html>
    `);
    res.end();

});

const port = 2001;
server.listen(port,() => {
    console.log(`Server running on addres http://localhost:${port}`);

});