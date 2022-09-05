const mongoose = require('mongoose')

const AvailabilitySchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.models['Availability'] || mongoose.model('Availability', AvailabilitySchema)