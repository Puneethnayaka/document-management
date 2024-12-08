const mongoose = require('mongoose');
const User = require('./User'); // Only import, don't redefine the model

// Define the document schema (if needed)
const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  filePath: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

// Ensure you're not overwriting the User model here
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
