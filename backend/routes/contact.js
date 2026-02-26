const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const entry = await Contact.create({ name, phone, email, message });
    res.status(201).json({ success: true, data: entry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/contact  (optional – list all submissions)
router.get('/', async (_req, res) => {
  try {
    const entries = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: entries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
