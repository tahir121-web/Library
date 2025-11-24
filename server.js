// server.js - Express server for serving the books library
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

// Serve static files from the current directory
app.use(express.static('.'));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to serve books data
app.get('/api/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'books.json'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));