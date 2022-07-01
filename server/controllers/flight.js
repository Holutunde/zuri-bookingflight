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
    const { title, price } = await req.body
    const newFlight = {
      id: uuid(),
      title,
      price,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    }
    const AddFlight = flights.push(newFlight)
    res
      .status(201)
      .json({ success: 'new flight plan successfully created', AddFlight })
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
    res
      .status(200)
      .json({ success: `flight plan with ${id} found`, flightPlan })
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
    res
      .status(200)
      .json({ success: `flight plan with ${id} updated`, flightPlan })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//delete flight
const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params
    const flightPlan = flights.filter((flight) => flight.id !== id)
    res
      .status(200)
      .json({ success: `flight plan with ${id} deleted`, flightPlan })
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
