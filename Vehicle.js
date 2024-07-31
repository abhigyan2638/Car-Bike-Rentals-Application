const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true }, // car or bike
  model: { type: String, required: true },
  pricePerHour: { type: Number, required: true },
  image: String,
  availability: { type: Boolean, default: true },
  // Add more fields like location, features, etc.
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
