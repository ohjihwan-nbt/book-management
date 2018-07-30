const crypto = require('crypto')
const {key} = sails.config.crypto

module.exports = {
  friendlyName: '암호화 시 사용하는 기능',

  description: 'crypto 라이브러리를 이용하여 aes-256-cbc 방식으로 key를 이용해 암호화합니다. key는 sails 전역 config 내에 crypto.key 내에 저장된 것을 사용합니다.',

  inputs: {
    plainText: {
      type: 'string',
      example: 'plain text',
      description: '암호화 하기 전 평문을 의미합니다.',
      required: true
    }
  },

  fn: async function(inputs, exists) {
    const {plainText} = inputs
    const cipher = crypto.createCipher('aes-256-cbc', key)

    let result = cipher.update(plainText, 'utf8', 'base64')
    result += cipher.final('base64')

    exists.success(result)
  }
}