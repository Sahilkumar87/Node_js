const sum = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
<head>
    <title>Calculator App</title>
</head>
<body>
    <h1>Your result is ${result}</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</body>
</html>`);
    return res.end();
  });
};

module.exports = sum;
