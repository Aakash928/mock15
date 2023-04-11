const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  travellers: Number,
  budget: Number,
}, {
  timestamps: true,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
