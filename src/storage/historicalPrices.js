const HistoricalPrices = require('../models/historicalPrices')

const bulkInsert = async (data) => {
  try {
    await HistoricalPrices.insertMany(data)
    return {
      success: true
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to save historical data'
    }
  }
}

const findByIsin = async (isin) => {
  try {
    const data = await HistoricalPrices.find({ isin })
    if (!data) {
      return {
        success: false,
        message: `No history found for ${isin}`
      }
    }
    return {
      success: true,
      data
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to query history by isin'
    }
  }
}

module.exports = {
  bulkInsert,
  findByIsin
}
