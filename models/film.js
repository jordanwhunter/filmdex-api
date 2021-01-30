const mongoose = require('mongoose');

const typeString = { type: String, trim: true };
const typeReqString = { type: String, required: true, trim: true };
const typeReqNumber = { type: Number, required: true }
const typeReqBoolean = { type: Boolean, required: true }
const typeReqDate = { type: Date, required: true, default: Date.now }

const customDescriptionSchema = new mongoose.Schema({ uniqueTag: typeString });
const keyFeaturesSchema = new mongoose.Schema({ feature: typeString });

const filmSchema = new mongoose.Schema({
  brand: typeReqString,
  name: typeReqString,
  iso: typeReqNumber,
  formatThirtyFive: typeReqBoolean,
  formatOneTwenty: typeReqBoolean,
  color: typeReqBoolean,
  process: typeReqString,
  staticImageUrl: typeReqString,
  description: typeReqString,
  customDescription: [customDescriptionSchema],
  keyFeatures: [keyFeaturesSchema],
  dateAdded: typeReqDate
})

module.exports = mongoose.model('film', filmSchema)