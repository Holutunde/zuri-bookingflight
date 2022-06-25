const express = require('express')
const router = express.Router()

const {
  getFlights,
  createFlight,
  singleFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flight')

router.route('/').get(getFlights)
router.route('/').post(createFlight)
router.route('/:id').get(singleFlight)
router.route('/:id').put(updateFlight)
router.route('/:id').delete(deleteFlight)

module.exports = router
