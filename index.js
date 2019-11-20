const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const logger = require('./src/logger')
const { MONGO_URL, PORT } = require('./src/config')
const apiRoutes = require('./src/routes')

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useFindAndModify: false })
const db = mongoose.connection
db.on('error', (err) => logger.error('Mongoose connection error', err))
db.once('open', () => logger.info('Mongoose connected successfully'))

// Set up Express Server
const app = express()
app.set('port', PORT)
app.use(cors({ exposedHeaders: 'Authorization' }))
app.use(compression())
app.use(helmet())
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(bodyParser.json({ limit: '20mb' }))
app.use(helmet.noCache())
const morganFormat = ':method :url :status :response-time ms'
app.use(morgan(morganFormat, { stream: logger.stream }))

const server = app.listen(app.get('port'), () => {
  logger.info(`App is listening on port ${app.get('port')}`)
})

app.use('/api/v1', apiRoutes)

module.exports = server
