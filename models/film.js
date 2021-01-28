const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  iso: {
    type: Number,
    required: true
  },
  formatThirtyFive: {
    type: Boolean,
    required: true
  },
  formatOneTwenty: {
    type: Boolean,
    required: true
  },
  // sizes: [{
  //   index: {
  //     type: Number,
  //     required: true
  //   },
  //   format: {
  //     type: String,
  //     required: true,
  //     trim: true
  //   }
  // }],
  color: {
    type: Boolean,
    required: true
  },
  process: {
    type: String,
    required: true,
    trim: true
  },
  staticImageUrl: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('filmtypes', filmSchema)