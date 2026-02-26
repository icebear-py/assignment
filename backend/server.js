require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use((req, res, next) => { res.setHeader('ngrok-skip-browser-warning', 'true'); next(); });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/careers', require('./routes/career'));
app.use('/api/admin',   require('./routes/admin'));

// Health check
app.get('/', (_req, res) => res.send('Prodesk API is running'));

// Connect to MongoDB & start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
