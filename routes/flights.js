const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// Endpoint to get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to seed 15 flights if empty
router.post('/seed', async (req, res) => {
  try {
    const count = await Flight.countDocuments();
    if (count === 0) {
      const flights = [/* Add 15 flight objects here */];
      await Flight.insertMany(flights);
      res.json({ message: "Flights seeded" });
    } else {
      res.json({ message: "Flights already exist" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
