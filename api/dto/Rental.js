const moment = require('moment')

class Rental {
  constructor(userId, bookId) {
    if(!userId) throw 'invalid userId'
    else if(!bookId) throw 'invalid bookId'

    this.userId = userId
    this.bookId = bookId
    this.pickedUpDate = +moment()
    this.returnDate = +moment(this.pickedUpDate).add(14, 'day') // MAGIC NUMBER 제거 필요
  }
}

module.exports = Rental
