const apiRoutes = require('express').Router()
const authMiddleware = require('./authMiddleware')
const { getInvestments, getInvestment, updateInvestment, deleteInvestment, createInvestment } = require('./controllers/investmentController')
const { saveStocks, getStocks } = require('./controllers/stocksController')

apiRoutes.get('/', (req, res) => res.status(200).json({ message: 'Api works' }))
apiRoutes.post('/investments', authMiddleware, createInvestment)
apiRoutes.get('/investments', authMiddleware, getInvestments)
apiRoutes.delete('/investments/:id', authMiddleware, deleteInvestment)
apiRoutes.put('/investments/:id', authMiddleware, updateInvestment)
apiRoutes.get('/investments/:id', authMiddleware, getInvestment)

apiRoutes.post('/stocks', saveStocks)
apiRoutes.get('/stocks', getStocks)

module.exports = apiRoutes
