const express = require('express')
const path = require('path')
const router = require('./router')
const morgan = require('morgan')
const app = express()
const db = require('./database/models').db
const bodyParser = require('body-parser')
const cors = require('cors')

// App setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

router(app)


const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res, next) => {
  console.log('Listening on port: ', PORT)
  db
    .sync()
    .then(() => console.log('Database is connected'))
    .catch(err => console.error)
})
