const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields like phone number, address, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
