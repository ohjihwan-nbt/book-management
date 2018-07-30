const {aes256CbcEncrypt: encrypt, aes256CbcDecrypt: decrypt} = sails.helpers
const co = require('co')

module.exports = {
  encodeString(req, res) {
    const {str} = req.params
    if(!str) return res.badRequest()

    co(function*() {
      const result = yield encrypt(str)
      
      if(!result) return res.notFound()
      res.json({result})
    }).catch(err => res.serverError(err))
  },
  decodeString(req, res) {
    const {str} = req.params
    if(!str) return res.badRequest()

    co(function*() {
      const result = yield decrypt(str)
      
      if(!result) return res.notFound()
      
      res.json({result})
    }).catch(err => res.serverError(err))
  },
}
