// 1. Import Express
const express = require('express');
require('dotenv').config();

// 2. Create an Express application
const app = express();

// 3. Define a port to run on
const port = process.env.PORT || 3000;

// 4. Create a basic route
// This will listen for GET requests on the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// 5. Start the server
// This tells your app to listen for connections on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});