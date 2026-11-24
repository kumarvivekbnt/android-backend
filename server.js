const http = require("http");

const GEMINI_API_KEY = 
process.env.GEMINI_API_KEY;

const server = http.createServer((req, res) => {
res.setHeader("Content-Type", "application/json");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS");

if (req.method === "OPTIONS") {
res.writeHead(200);
return res.end();
}

if (req.method === "GET" || req.method === "HEAD") {
res.writeHead(200);
return res.end(JSON.stringify({
status: "ok",
message: "Backend is running"
}));
}

if (req.method === "POST" && req.url === "/test") {
res.writeHead(200);
return res.end(JSON.stringify({
status: "ok",
message: "POST test successful"
}));
}

res.writeHead(404);
res.end(JSON.stringify({
status: "error",
message: "Endpoint not found"
}));
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
console.log("Server started on " + port);
});
