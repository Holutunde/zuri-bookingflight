const express = require('express')
const router = express.Router()

const {
  getFlights,
  createFlight,
  getSingleFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flight')

router.route('/').get(getFlights)

module.exports = router
