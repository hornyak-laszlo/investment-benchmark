const Stocks = require('../models/stocks')

const getStockCount = async () => {
  try {
    const count = await Stocks.count()
    return {
      success: true,
      count
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to query stock count'
    }
  }
}

const bulkInsert = async (data) => {
  try {
    await Stocks.insertMany(data)
    return {
      success: true
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to bulk insert stocks'
    }
  }
}

const findAll = async () => {
  try {
    const stocks = await Stocks.find()
    return {
      success: true,
      data: stocks
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to query stocks'
    }
  }
}

const updateSyncedAt = async (_id) => {
  try {
    const stocks = await Stocks.findByIdAndUpdate(_id, { lastSyncedAt: new Date() })
    return {
      success: true,
      data: stocks
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to update lastSyncedAt'
    }
  }
}

module.exports = {
  getStockCount,
  bulkInsert,
  updateSyncedAt,
  findAll
}
