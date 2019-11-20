const apiRoutes = require('express').Router()
const authMiddleware = require('./authMiddleware')
const { createInvestment } = require('./controllers/investmentController')

apiRoutes.get('/', (req, res) => res.status(200).json({ message: 'Api works' }))
apiRoutes.post('/investments', authMiddleware, createInvestment)

module.exports = apiRoutes
