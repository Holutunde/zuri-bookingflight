const { flights } = require('../model/flightmodel')
const { v4: uuid } = require('uuid')

//Get all flight
const getFlights = async (req, res) => {
  try {
    const flightPlans = flights
    res.status(200).json({ success: true, flightPlans })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//Create new flight
const createFlight = async (req, res) => {
  try {
    const { title, time, price, date } = req.body
    const newUser = {
      id: uuid(),
      title,
      price,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    }
    const newFlight = flights.push(newUser)
    res
      .status(201)
      .json({ success: 'new flight successfully created', newFlight })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//Get single flight
const singleFlight = async (req, res) => {
  try {
    const { id } = req.params
    const flightPlan = flights.find((user) => user.id === id)
    // console.log(user)
    res.status(200).json({ success: 'user found', flightPlan })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//update flight
const updateFlight = async (req, res) => {
  try {
    const { id } = req.params
    const flightPlan = flights.find((user) => user.id === id)
    const { title, price } = await req.body
    flightPlan.title = title
    flightPlan.price = price
    res.status(200).json({ success: 'user updated', user })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//delete flight
const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params.id
    const flightPlan = flights.find((flight) => flight.id === id)
    flights.splice(flights.indexOf(flightPlan), 1)
    res.status(200).json({ success: 'user deleted', flightPlan })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = {
  getFlights,
  createFlight,
  singleFlight,
  updateFlight,
  deleteFlight,
}
