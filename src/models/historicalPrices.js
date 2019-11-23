const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historicalPricesSchema = new Schema({
  _id: String,
  symbol: String,
  isin: String,
  date: String,
  close: Number,
  volume: Number,
  change: Number,
  changePercent: Number,
  changeOverTime: Number
})

module.exports = mongoose.model('HistoricalPrices', historicalPricesSchema)
