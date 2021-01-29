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
});

// Route for GETTING one film type
router.get('/:id', getFilm, (req, res) => {
  // res.send(res.film.name)
  res.json(res.film)
});

// Route for CREATING a new film type
router.post('/', async (req, res) => {
  const film = new Film({
    name: req.body.name,
    brand: req.body.brand,
    iso: req.body.iso,
    formatThirtyFive: req.body.formatThirtyFive,
    formatOneTwenty: req.body.formatOneTwenty,
    color: req.body.color,
    process: req.body.process,
    staticImageUrl: req.body.staticImageUrl,
    description: req.body.description,
    customDescription: req.body.customDescription,
    keyFeatures: req.body.keyFeatures
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
  // In order to update only for things sent in request, we need to check the request
  if (req.body.customDescription !== null) {
    res.film.customDescription = req.body.customDescription
  }
  if (req.body.keyFeatures !== null) {
    res.film.keyFeatures = req.body.keyFeatures
  }
  else if (req.body.name !== null) {
    res.film.name = req.body.name
  }
  else if (req.body.brand !== null) {
    res.film.brand = req.body.brand
  }
  else if (req.body.iso !== null) {
    res.film.iso = req.body.iso
  }
  else if (req.body.formatThirtyFive !== null) {
    res.film.formatThirtyFive = req.body.formatThirtyFive
  }
  else if (req.body.formatOneTwenty !== null) {
    res.film.formatOneTwenty = req.body.formatOneTwenty
  }
  else if (req.body.color !== null) {
    res.film.color = req.body.color
  }
  else if (req.body.process !== null) {
    res.film.process = req.body.process
  }
  else if (req.body.staticImageUrl !== null) {
    res.film.staticImageUrl = req.body.staticImageUrl
  }
  else if (req.body.description !== null) {
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
router.delete('/:id', getFilm, async (req, res) => {
// router.delete('/:id', async (res) => {
  try {
    await res.film.remove()
    res.json({ message: 'Film Type Has Been Deleted' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
});

// Middleware function to for endpoints requiring IDs (DRY function)
// Next function says to move onto next section of code (req, res) parameters and callback
async function getFilm(req, res, next) {
  let film
  try {
    film = await Film.findById(req.params.id)
    if (film === null) {
      return res.status(404).json({ message: 'Film Type Cannot Be Found' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.film = film
  next()
};

module.exports = router