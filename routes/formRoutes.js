const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Create new form submission
router.post('/', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedData = await formData.save();
    res.json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// form submissions
router.get('/', async (req, res) => {
  try {
    const formData = await FormData.find();
    res.json(formData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Filter form submissions by destination
router.get('/destination/:destination', async (req, res) => {
  try {
    const formData = await FormData.find({ destination: req.params.destination });
    res.json(formData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Sort form submissions by budget per person
router.get('/budget/:sortOrder', async (req, res) => {
  try {
    const sortOrder = req.params.sortOrder === 'asc' ? 1 : -1;
    const formData = await FormData.find().sort({ budget: sortOrder });
    res.json(formData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
