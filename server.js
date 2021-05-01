const express = require('express');
const cors = require('cors');

// Init
const app = express();

// Cors
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

// Test route
app.get('/', (req, res) => res.send('Cats api running'));

// Routes
app.use('/api/cats', require('./routes/cats'));

// Default PORT
const PORT = process.env.PORT || 5000;

// Start 
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

module.exports = app;
