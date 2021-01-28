const express = require('express');
const Film = require('../models/film');
const router = express.Router();

// Route for GETTING all film types
router.get('/', async (req, res) => {
  try {
    const films = await Film.find()
    res.json(films)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Route for GETTING one film type

// Route for CREATING a new film type

// Route for UPDATING an existing film type

// Route for DELETING an existing film type

module.exports = router