const mongoose = require('mongoose');

// Define the schema
const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
});

// Export the model
module.exports = mongoose.model('News', newsSchema);
