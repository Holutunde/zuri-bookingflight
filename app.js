const express = require('express')
const flights = require('./server/routes/flights')

const app = express()

const PORT = process.env.PORT || 3000

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/flights', flights)

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
