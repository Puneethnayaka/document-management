const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  filePath: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /.+\@.+\..+/ // Email validation 
    },
    password: { type: String, required: true },
    documents: [documentSchema],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Optional: Add index for frequently queried fields
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);
module.exports = User;
