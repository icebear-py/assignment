const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Career = require('../models/Career');

const ADMIN_EMAIL = 'ansh@gmail.com';
const ADMIN_PASS  = 'admin';

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    res.json({ success: true, token: 'prodesk-admin-token' });
  } else {
    res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
});

function auth(req, res, next) {
  if (req.headers.authorization === 'Bearer prodesk-admin-token') return next();
  res.status(401).json({ success: false, error: 'Unauthorized' });
}

router.get('/contacts', auth, async (_req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
});

router.get('/careers', auth, async (_req, res) => {
  const data = await Career.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
});

module.exports = router;
