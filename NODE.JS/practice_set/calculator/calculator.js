const requestSum = require("./sum");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
<head>
    <title>Calculator App</title>
</head>
<body>
    <h1> Welcome to Calculator</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/calculate">Calculator</a></li>
        </ul>
    </nav>
</body>
</html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate") {
    res.write(`<html lang="en">
<head>
    <title>Calculator App</title>
</head>
<body>
    <h1>Here is the Calculator</h1>
    <form action="/calculate-result" method="POST">
    <input type="text" placeholder="first num" name="first"/>
    <input type="text" placeholder="second num" name="second"/>
    </br>
    <input type="submit" value="sum"/>
    </form>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</body>
</html>`);
    return res.end();
  }

  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return requestSum(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html lang="en">
<head>
    <title>Calculator App</title>
</head>
<body>
    <h1>404 Page Does't exit</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/calculate">Calculator</a></li>
        </ul>
    </nav>
</body>
</html>`);
  return res.end();
};

module.exports = requestHandler;
