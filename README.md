Setting up an Express Server

• Create and navigate into the new folder
mkdir multi-route-server
cd multi-route-server

• Initialise the project
npm init -y

• Install Express
npm install express

• Add code to index.js
Paste this code inside:

// Import express
const express = require("express");

// Initialise express app
const app = express();

// Define port
const PORT = 5000;

// First route (GET /)
app.get("/", (req, res) => {
res.send("Welcome to my server");
});

// Second route (GET /about)
app.get("/about", (req, res) => {
res.send("This is a simple server created to practise Express routing.");
});

// Start the server
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

• Run the server
node index.js

• You should see:
Server is running on http://localhost:5000
