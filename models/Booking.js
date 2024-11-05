const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: String,
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  },
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
