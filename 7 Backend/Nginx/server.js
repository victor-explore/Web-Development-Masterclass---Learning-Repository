const http = require("http"); // Importing the http module
const fs = require("fs"); // Importing the fs module
const path = require("path"); // Importing the path module

const port = 3001; // Setting the port number

const server = http.createServer((req, res) => {
  // Makes a server object that handles HTTP requests
  const filePath = path.join(
    __dirname, // Gets the directory name of the current module
    req.url === "/" ? "index.html" : req.url // If URL is root, serve index.html, otherwise serve requested file
  );
  const extname = String(path.extname(filePath)).toLowerCase(); // Gets the file extension in lowercase
  const mimeTypes = {
    // Define common MIME types for different file extensions
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream"; // Get content type based on file extension

  fs.readFile(filePath, (err, content) => {
    // Read the requested file
    if (err) {
      // If error reading file
      res.writeHead(404, { "Content-Type": "text/html" }); // Set 404 status code
      res.end("404 Not Found"); // Send 404 response
    } else {
      // If file read successfully
      res.writeHead(200, { "Content-Type": contentType }); // Set 200 status code and content type
      res.end(content, "utf-8"); // Send file content as response
    }
  });
});

server.listen(port, () => {
  // Listens for connections on the server
  console.log(`Server is running on port ${port}`);
});
