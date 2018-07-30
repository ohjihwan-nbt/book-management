const isAdminAPI = (path) => {
  const [,,,apiRoot] = path.split('/')
  return apiRoot === 'admin'
}

module.exports = (req, res, next) => {
  const {path} = req

  if(isAdminAPI(path)) {
    // 유효한 사용자인지 확인한 뒤 invalid하면 아래 코드로 처리
    return res.badRequest()
  }

  next()
}