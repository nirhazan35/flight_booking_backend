const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const flightsRoute = require('./routes/flights');
const bookingsRoute = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/flights', flightsRoute);
app.use('/api/bookings', bookingsRoute);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
