const express = require('express')
const router = express.Router()
const availabilityController = require('../controllers/availability')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, availabilityController.getAvailability)

router.post('/createMeeting', availabilityController.createMeeting)

router.put('/deleteMeeting', availabilityController.deleteMeeting)

module.exports = router