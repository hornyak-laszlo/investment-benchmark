const MonthlyInvestments = require('../models/monthlyInvestments')

const create = async (data) => {
  try {
    const newConversation = await MonthlyInvestments.create(data)
    return {
      success: true,
      data: newConversation
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to create investment'
    }
  }
}

module.exports = {
  create
}
