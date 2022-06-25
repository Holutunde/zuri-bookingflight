const { flights } = require('../model/flightmodel')
const { v4: uuid } = require('uuid')

//Get all flight
const getFlights = async (req, res) => {
  try {
    const users = flights
    res.status(200).json({ success: true, users })
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
      time,
      price,
      date,
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
    const { id } = req.params.id
    const user = flights.find((user) => user.id === id)
    res.status(200).json({ success: 'user found', user })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

//update flight
const updateFlight = async (req, res) => {
  try {
    const { id } = req.params.id
    const user = flights.find((user) => user.id === id)
    const { title, time, price, date } = await req.body
    user.title = title
    user.time = time
    user.price = price
    user.date = date
    res.status(200).json({ success: 'user updated', user })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = {
  getFlights,
  createFlight,
  singleFlight,
  updateFlight,
  //   deleteFlight,
}
