// Importing modules
const http = require("http"); // Importing the http module

// Declaring variables
const hostname = "127.0.0.1"; // Declaring the hostname
const port = 3000; // Declaring the port number

// make a server object
const server = http.createServer((req, res) => {
  if (req.url === "/ice-tea" && req.method === "GET") {
    res.end("<h1>Hello ice tea</h1>");
  }
  if (req.url === "/coffee" && req.method === "GET") {
    res.end("<h1>Hello coffee</h1>");
  } else {
    res.end("<h1>404 Not Found</h1>");
  }
});

// Starting the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
