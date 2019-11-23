const stocks = require('../storage/stocks')

const saveStocks = async (req, res) => {
  const stockCountRes = await stocks.getStockCount()
  if (!stockCountRes.success) {
    return res.status(400).send(stockCountRes.message)
  }
  if (stockCountRes.count > 0) {
    return res.status(200).send('Already synced')
  }
  const stocksRes = require('../../stocks.json')
  const data = stocksRes.map(s => ({
    _id: s.iexId,
    name: s.name,
    date: s.date,
    type: s.type,
    symbol: s.symbol,
    region: s.region,
    currency: s.currency,
    isEnabled: s.isEnabled
  }))
  await stocks.bulkInsert(data)
  return res.status(200).send('ok')
}

const getStocks = async (req, res) => {
  const data = await stocks.findAll()
  return res.status(200).json(data)
}

module.exports = {
  getStocks,
  saveStocks
}
