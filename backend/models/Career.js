const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  phone:   { type: String, required: true, trim: true },
  email:   { type: String, required: true, trim: true, lowercase: true },
  position:       { type: String, trim: true, default: '' },
  portfolio_link: { type: String, trim: true, default: '' },
  message:        { type: String, trim: true, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
