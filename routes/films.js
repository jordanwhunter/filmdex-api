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
router.patch('/:id', getFilm, async (req, res) => {
  if (req.body.name !== null) {
    res.film.name = req.body.name
  }
  if (req.body.brand !== null) {
    res.film.brand = req.body.brand
  }
  if (req.body.iso !== null) {
    res.film.iso = req.body.iso
  }
  if (req.body.sizes !== null) {
    res.film.sizes = req.body.sizes
  }
  if (req.body.color !== null) {
    res.film.color = req.body.color
  }
  if (req.body.process !== null) {
    res.film.process = req.body.process
  }
  if (req.body.staticImageUrl !== null) {
    res.film.staticImageUrl = req.body.staticImageUrl
  }
  if (req.body.description !== null) {
    res.film.description = req.body.description
  }
  try {
    const updatedFilm = await res.film.save()
    res.json(updatedFilm)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

// Route for DELETING an existing film type

module.exports = router