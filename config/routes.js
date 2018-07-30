/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  'get  /api/v1/books'                 : 'BookController.getBookList',
  'get  /api/v1/books/:bookId'         : 'BookController.getBookInformation',
  'post /api/v1/books/:bookId'         : 'BookController.addBookInformation',
  'put  /api/v1/books/:bookId'         : 'BookController.modifyBookInformation',
  'get  /api/v1/books/search/:keyword' : 'BookController.searchBookListByKeyword', // 키워드 내에서 상태로 필터링하는 것은 클라이언트에서 처리할 것

  'get  /api/v1/rents/:bookId'         : 'RentController.getRentalInformation', // 삭제
  'put  /api/v1/rents/:userId/:bookId' : 'RentController.modifyRentalInformation', //self only
  'post /api/v1/rents/:userId/:bookId' : 'RentController.addRentalInformation',

  'get  /api/v1/crypto/encode/:str' : 'CryptoController.encodeString',
  'get  /api/v1/crypto/decode/:str' : 'CryptoController.decodeString',
  
  'get  /api/v1/admin/test' : 'AdminController.test',

  // /api/v1/admin/... -> admin 필터 거쳐 처리되도록 : policies 의 beforeEnterController에서 모든 요청에 대해 필터링 처리
  '/*' : {
    skipAssets: true,
    URL: 'DefaultHttpController.whenNotFound'
  }

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
