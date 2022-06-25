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

//Create new flight
const createFlight = async (req, res) => {
  try {
    const user = await req.body
    const newFlight = flights.push(user)
    res.status(201).json({ success: true, user: newFlight })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = {
  getFlights,
  createFlight,
  //   getSingleFlight,
  //   updateFlight,
  //   deleteFlight,
}
