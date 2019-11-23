const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stocksSchema = new Schema({
  _id: String,
  name: String,
  date: String,
  type: String,
  symbol: String,
  region: String,
  currency: String,
  isEnabled: Boolean,
  lastSyncedAt: Date
})

module.exports = mongoose.model('Stocks', stocksSchema)
