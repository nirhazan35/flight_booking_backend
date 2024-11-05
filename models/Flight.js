const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: String,
  origin: String,
  destination: String,
  departureTime: String,
  price: Number,
});

module.exports = mongoose.model('Flight', flightSchema);
