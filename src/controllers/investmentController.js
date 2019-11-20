const monthlyInvestments = require('../storage/monthlyInvestment')

const createInvestment = async (req, res) => {
  const data = req.body
  const newInvestmentRes = await monthlyInvestments.create(data)
  if (!newInvestmentRes.success) {
    return res.status(400).json(newInvestmentRes.message)
  }
  return res.status(201).json(newInvestmentRes.data)
}

module.exports = {
  createInvestment
}
