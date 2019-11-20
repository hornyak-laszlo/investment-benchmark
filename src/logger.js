const winston = require('winston')
require('winston-daily-rotate-file')
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'development'
const { combine, colorize, printf, timestamp } = winston.format

const fileLogger = (level) => new winston.transports.DailyRotateFile({
  filename: `./logs/${level}-%DATE%.log`,
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '20m',
  maxFiles: '14d',
  level,
  handleExceptions: true,
  colorize: false,
  format: combine(
    timestamp(),
    printf(info => {
      return `[${info.timestamp}] [${info.level}] => ${info.message}`
    })
  )
})

const infoFileLogger = fileLogger('info')
const errorFileLogger = fileLogger('error')

const consoleLogger = new winston.transports.Console({
  level: (env === 'test') ? 'error' : 'debug',
  handleExceptions: true,
  colorize: true,
  format: combine(
    colorize(),
    timestamp(),
    printf(info => {
      return `[${info.timestamp}] [${info.level}] => ${info.message}`
    })
  )
})

let transports = []
switch (env) {
  case 'production':
    transports = [infoFileLogger, errorFileLogger]
    break
  case 'development':
    mongoose.set('debug', false)
    transports = [consoleLogger, errorFileLogger]
    break
}

const logger = winston.createLogger({
  transports,
  exitOnError: false
})

logger.stream = {
  write: (message) => {
    logger.info(message)
  }
}

module.exports = logger
