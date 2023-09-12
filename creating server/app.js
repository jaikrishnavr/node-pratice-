// Import the 'http' module, which provides functionality for creating HTTP servers.
const http = require('http');

// Create an HTTP server using the 'http.createServer' method. 
// This method takes a callback function that will be called whenever a request is received by the server.
const server = http.createServer((req, res) => {

  // Set the response header with a status code of 200 (OK) and a content type of 'text/plain'.
  res.writeHead(200, {'content-Type': 'text/plain'});

  // Write the 'hello world' message as the response body.
  res.end('hello world');
});

// Tell the server to listen on port 3000 and the IP address '127.0.1.1'.
server.listen(3000, '127.0.1.1');
