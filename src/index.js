// backend/src/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define a basic route for testing
app.get('/', (req, res) => {
    res.send('Flight Booking API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
