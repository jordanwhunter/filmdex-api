const express = require('express');
const Film = require('../models/film');
const router = express.Router();

// Route for GETTING all film types
router.get('/', async (res) => {
  try {
    const films = await Film.find()
    res.json(films)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// Route for GETTING one film type
router.get('/:id', getFilm, (res) => {
  res.json(res.film)
});

// Route for CREATING a new film type
router.post('/', async (req, res) => {
  const film = new Film({
    name: req.body.name,
    brand: req.body.brand,
    iso: req.body.iso,
    sizes: req.body.sizes,
    color: req.body.color,
    process: req.body.process,
    staticImageUrl: req.body.staticImageUrl,
    description: req.body.description
  })
  try {
    const newFilm = await film.save()
    res.status(201).json(newFilm)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

// Route for UPDATING an existing film type

// Route for DELETING an existing film type

module.exports = router