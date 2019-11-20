const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monthlyInvestmentSchema = new Schema({
  _id: String,
  dayOfMonth: Number,
  index: String,
  boughtAmount: Number,
  boughtCurrency: String,
  startedAtYear: Number,
  startedAtMonth: Number,
  endedAtYear: Number,
  endedAtMonth: Number
})

module.exports = mongoose.model('MonthlyInvestments', monthlyInvestmentSchema)
