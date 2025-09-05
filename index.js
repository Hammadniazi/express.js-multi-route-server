// const express = require('express'); 
import express from "express";
const app = express(); 
const port = 5000; 
 
// This is our route handler for GET requests to the root 
app.get('/', (req, res) => { 
  res.send('Welcome to my Server!!'); 
}); 
app.get('/about', (req, res) => { 
  res.send('This is a simple server created to practise Express routing.'); 
}); 
 
// This starts the server 
app.listen(port, () => { 
  console.log(`Server is running and listening on http://localhost:${port}`); 
}); 