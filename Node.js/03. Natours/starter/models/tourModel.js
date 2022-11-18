const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "A tour must have a name"],
  },
  duration: {
    type: Number,
    required: [true, "A tour need to have the duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have the group size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour should have the difficulty level"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have the price"],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have the sumamry"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: true,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  startDates: [Date],
});

module.exports = mongoose.model("Tour", tourSchema);
