const Rental = require('../dto/Rental')
const defaultResponseJson = { result: 'success' }
const getDefaultResponseJson =_=> Object.assign({}, defaultResponseJson)

module.exports = {
  getRentalInformation(req, res) {
    const {bookId} = req.params
    const responseJson = getDefaultResponseJson()
    
    return res.json(responseJson)
  },
  modifyRentalInformation(req, res) {
    const {userId, bookId} = req.params
    const responseJson = getDefaultResponseJson()

    return res.json(responseJson)
  },
  addRentalInformation(req, res) {
    const {userId, bookId} = req.params
    
    // 현재 book이 예약가능한지 확인한 뒤
    // 가능한 경우 오늘 기준 반납일자가 언제인지 BookRentalPreferences 테이블을 참조하여 Rental 테이블에 데이터를 추가한다.

    // user_id
    // book_id
    // picked_up_date
    // return_date
    // Rental.insert(userId, bookId, pickedUpDate, returnDate)
    const rental = new Rental(userId, bookId)
    
    const responseJson = getDefaultResponseJson()
    responseJson.rental = rental

    return res.json(responseJson)
  },
}