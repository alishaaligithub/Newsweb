const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize app and middleware
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/')//mongodb://localhost:27017/
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Import routes
const newsRoutes = require('./routes/news');
app.use('/news', newsRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
