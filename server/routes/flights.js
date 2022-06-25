const express = require('express')
const router = express.Router()

const {
  getFlights,
  createFlight,
  //SingleFlight,
  //   updateFlight,
  //   deleteFlight,
} = require('../controllers/flight')

router.route('/').get(getFlights)
router.route('/').post(createFlight)

module.exports = router
