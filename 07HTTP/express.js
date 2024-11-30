// Import Express
const express = require('express');
const app = express();
// Define a GET route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});
// Handle undefined routes with a 404 response
app.use((req, res) => {
    res.status(404).send('Not Found');
});
// Set the server port
const port = 3001;
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
