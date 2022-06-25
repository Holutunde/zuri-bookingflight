const { flights } = require('../model/flightmodel')

//Get all flight
const getFlights = async (req, res) => {
  try {
    const users = flights
    res.status(200).json({ success: true, users: users })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = {
  getFlights,
  //   createFlight,
  //   getSingleFlight,
  //   updateFlight,
  //   deleteFlight,
}
