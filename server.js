const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 4567
const { passengerRouter } = require('./passengerRouter')
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use('/passengers', passengerRouter)

app.get('/', async (request, response) => {
    try {
      response.json({
        msg: 'This is the titanic application'
      })
    } catch (e) {
      response.status(500).json({ msg: e.status })
    }
});

app.use((err, req, res, next) => {
console.log('error in error handler', err)
res.status(err.status || 500);
res.json({ message: err.message });
});


app.listen(PORT, () => console.log(`Titanic App listening on port: ${PORT}!`))
