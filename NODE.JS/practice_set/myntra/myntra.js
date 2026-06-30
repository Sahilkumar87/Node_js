const http = require("http");

const reqServer = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head><title>Myntra App</title></head><body><nav><ul><li><a href="/home">Home</a></li><li><a href="/men">Men</a></li><li><a href="/women">Women</a></li><li><a href="/kids">Kids</a></li><li><a href="/cart">Cart</a></li></ul></nav></body></html>',
    );
    return res.end();
  }
  if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to Men</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to Women</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to Kids</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to Cart</h1>");
    return res.end();
  }
};

const server = http.createServer(reqServer);
const port = 12121;
server.listen(port, () => {
  console.log(`server is running at port http://localhost:${port}`);
});
