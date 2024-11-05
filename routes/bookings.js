const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');

// Endpoint to create a new booking
router.post('/', async (req, res) => {
  try {
    const { userName, flightId } = req.body;
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ error: "Flight not found" });
    }

    const booking = new Booking({ userName, flightId });
    await booking.save();
    res.json({ message: "Flight booked", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all bookings for a user
router.get('/:userName', async (req, res) => {
  try {
    const bookings = await Booking.find({ userName: req.params.userName }).populate('flightId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
