const MonthlyInvestments = require('../models/monthlyInvestments')

const create = async (data) => {
  try {
    const investment = await MonthlyInvestments.create(data)
    return {
      success: true,
      data: investment
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to create investment'
    }
  }
}

const update = async (_id, data) => {
  try {
    const investment = await MonthlyInvestments.updateOne({ _id }, data)
    return {
      success: true,
      data: investment
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to update investment'
    }
  }
}

const remove = async (_id) => {
  try {
    const result = await MonthlyInvestments.deleteOne({ _id })
    return {
      success: true,
      data: result
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to delete investment'
    }
  }
}

const findById = async (_id) => {
  try {
    const investment = await MonthlyInvestments.findById(_id)
    if (!investment) {
      return {
        success: false,
        message: 'No investment found with the given name'
      }
    }
    return {
      success: true,
      data: investment
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to query investment'
    }
  }
}

const findByUserId = async (userId) => {
  try {
    const investments = await MonthlyInvestments.find({ userId })
    return {
      success: true,
      data: investments
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Failed to query investments'
    }
  }
}

module.exports = {
  update,
  remove,
  findById,
  findByUserId,
  create
}
