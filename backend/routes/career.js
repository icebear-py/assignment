const express = require('express');
const router = express.Router();
const Career = require('../models/Career');

// POST /api/careers
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, position, portfolio_link, message } = req.body;
    const entry = await Career.create({ name, phone, email, position, portfolio_link, message });
    res.status(201).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/careers  (optional – list all applications)
router.get('/', async (_req, res) => {
  try {
    const entries = await Career.find().sort({ createdAt: -1 });
    res.json({ success: true, data: entries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
