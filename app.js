const express = require('express')
const bodyParser = require('body-parser')
const createError = require('http-errors')
const flights = require('./server/routes/flights')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

// parse json
app.use(express.json())

app.use('/flights', flights)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
