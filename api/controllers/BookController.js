const defaultResponseJson = { result: 'success' }
const getDefaultResponseJson =_=> Object.assign({}, defaultResponseJson)

module.exports = {
  getBookList(req, res) {
    const responseJson = getDefaultResponseJson()

    return res.json(responseJson)
  },
  getBookInformation(req, res) {
    const responseJson = getDefaultResponseJson()
    
    return res.json(responseJson)
  },
  addBookInformation(req, res) {
    const responseJson = getDefaultResponseJson()
    
    return res.json(responseJson)
  },
  modifyBookInformation(req, res) {
    const responseJson = getDefaultResponseJson()
    
    return res.json(responseJson)
  },
  searchBookListByKeyword(req, res) {
    const responseJson = getDefaultResponseJson()
    
    return res.json(responseJson)
  },
}