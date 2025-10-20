const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  mobileModel: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  preferredDateTime: {
    type: Date,
    required: true
  },
  notes: {
    type: String
  },
  workshopId: {
    type: Number,
    required: true
  },
  workshopName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);