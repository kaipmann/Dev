
// Importing the HTTP module
const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
    // Checking if the request method is GET and the URL is '/'
    if (req.method === 'GET' && req.url === '/') {
        // Setting the response status code to 200 (OK)
        res.statusCode = 200;
        // Setting the Content-Type header to 'text/plain'
        res.setHeader('Content-Type', 'text/plain');
        // Sending the response body 'Hello World'
        res.end('Hello World');
    } else {
        // If the request doesn't match, set the status code to 404 (Not Found)
        res.statusCode = 404;
        // Sending the response body 'Not Found'
        res.end('Not Found');
    }
});

// Setting the port to 3001
const port = 3001;
// Starting the server and logging a message when it starts
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello World');
//     } else {
//         res.statusCode = 404;
//         res.end('Not Found');
//     }
// });

// const port = 3001;
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

