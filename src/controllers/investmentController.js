const monthlyInvestments = require('../storage/monthlyInvestment')

const createInvestment = async (req, res) => {
  const data = req.body
  data.userId = req.user.id
  const investmentRes = await monthlyInvestments.create(data)
  if (!investmentRes.success) {
    return res.status(400).json(investmentRes.message)
  }
  return res.status(201).json(investmentRes.data)
}

const updateInvestment = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const investmentRes = await monthlyInvestments.update(id, data)
  if (!investmentRes.success) {
    return res.status(400).json(investmentRes.message)
  }
  return res.status(200).json(investmentRes.data)
}

const deleteInvestment = async (req, res) => {
  const { id } = req.params
  const investmentRes = await monthlyInvestments.remove(id)
  if (!investmentRes.success) {
    return res.status(400).json(investmentRes.message)
  }
  return res.status(200).json(investmentRes.data)
}

const getInvestment = async (req, res) => {
  const { id } = req.params
  const investmentRes = await monthlyInvestments.findById(id)
  if (!investmentRes.success) {
    return res.status(400).json(investmentRes.message)
  }
  return res.status(200).json(investmentRes.data)
}

const getInvestments = async (req, res) => {
  const userId = req.user.id
  const investmentRes = await monthlyInvestments.findByUserId(userId)
  if (!investmentRes.success) {
    return res.status(400).json(investmentRes.message)
  }
  return res.status(200).json(investmentRes.data)
}

module.exports = {
  getInvestment,
  getInvestments,
  updateInvestment,
  deleteInvestment,
  createInvestment
}
