const historicalPrices = require('../storage/historicalPrices')

const saveHistoricalPrices = async (req, res) => {
  const { isin } = req.body
  for (let i = 0; i < isin.length; i++) {
    const currentIsin = isin[i]
    const data = require(`../data/${currentIsin}.json`)
    data.forEach(d => {
      d.isin = currentIsin
    })
    const dbRes = await historicalPrices.bulkInsert(data)
    if (!dbRes.success) {
      console.log('saving failed', currentIsin)
    }
  }
  return res.status(200).send('ok')
}

const getHistoricalPrices = async (req, res) => {
  const { isin } = req.params
  const dbRes = await historicalPrices.findByIsin(isin)
  if (!dbRes.success) {
    return res.status(400).send(dbRes.message)
  }
  return res.status(200).json(dbRes.data)
}

module.exports = {
  saveHistoricalPrices,
  getHistoricalPrices
}
