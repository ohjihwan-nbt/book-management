const crypto = require('crypto')
const {key} = sails.config.crypto

module.exports = {
  friendlyName: '복호화 시 사용하는 기능',

  description: 'crypto 라이브러리를 이용하여 aes-256-cbc 방식으로 key를 이용해 복호화 합니다. key는 sails 전역 config 내에 crypto.key 내에 저장된 것을 사용합니다.',

  inputs: {
    encryptedText: {
      type: 'string',
      example: 'encrypted text',
      description: '암호화 된 문장을 의미합니다.',
      required: true
    }
  },

  fn: async function(inputs, exists) {
    const {encryptedText} = inputs
    let result = undefined
    const decipher = crypto.createDecipher('aes-256-cbc', key)
    try {
      result = decipher.update(encryptedText, 'base64', 'utf8')
      result += decipher.final('utf8')
    } catch (error) { result = null }

    exists.success(result)
  }
}