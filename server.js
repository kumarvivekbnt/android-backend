
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  if (req.method === "GET" || req.method === "HEAD") {
    res.writeHead(200);

    const data = JSON.stringify({
      status: "ok",
      message: "Backend is running",
      path: req.url
    });

    return req.method === "HEAD" ? res.end() : res.end(data);
  }

  res.writeHead(405);
  res.end(JSON.stringify({
    status: "error",
    message: "Method not allowed"
  }));
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log("Server started on " + port);
});
