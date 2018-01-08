const express = require('express')
const path = require('path')
// const router = require('./routes')
const morgan = require('morgan')
const app = express()
const db = require('./database/models').db
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ exnteded: true }))
app.use(cors())

// router(app)

const PORT = 3001
app.listen(PORT, (req, res, next) => {
  console.log('Listening on port: ', PORT)
  db
    .sync()
    .then(() => console.log('Database is connected'))
    .catch(err => console.log('Unable to connect'))
})
