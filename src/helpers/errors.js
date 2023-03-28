const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.orinalURL}`)
  res.status(404)
  next(error)
}

export default notFound