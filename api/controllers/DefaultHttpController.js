module.exports = {
  whenNotFound(...params) {
    const [req, res] = [...params]
    return res.notFound()
  }
}