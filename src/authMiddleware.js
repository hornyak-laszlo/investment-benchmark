module.exports = (req, res, next) => {
  req.user = {
    id: 'test'
  }
  next()
}
