(_=>{
  const fs = require('fs')
  const moment = require('moment')
  moment.locale('ko')

  const data = (fs.readFileSync('./initialData.txt')).toString()
  const textList = data.split('\r\n').map(row => row.trim().replace('\r', '')).filter(row => String(row).trim() !== '')

  class Book {
    // id, title, [url, author, publisher, purchaseDate]
    hasValidLength(...params) { 
      let result = true
      params.forEach(param => { if(param.length !== 2) result = false })
      return result
    }
    setId(id) { this.id = id }
    setTitle(title) { this.title = title }
    setUrl(url) { this.url = url }
    setAuthor(author) { this.author = author }
    setPublisher(publisher) { this.setPublisher = publisher }
    setPurchaseDate(purchaseDate) { 
      const [year, month, day] = purchaseDate.split('.')
      if(!this.hasValidLength(year, month, day)) throw JSON.stringify({year, month, day})

      this.purchaseDate = +moment(`20${year}-${month}-${day}`)
    }
  }

  const isBookId = line => line.startsWith('T-') || line.startsWith('S-')
  const isHttpUrl = line => line.startsWith('http://') || line.startsWith('https://')
  const isDateFormat = line => !isNaN(line.replace(/\./g, '')) 

  const bookList = []
  let currentBook = undefined
  let countForCheckColumnIndex = undefined
  const ifExistBookThenPushToBookList = book => { if(book instanceof Book) bookList.push(book) }

  const createNewBook = id => {
    ifExistBookThenPushToBookList(currentBook)
    
    currentBook = new Book()
    currentBook.setId(id)
    
    countForCheckColumnIndex = 1
  }

  textList.forEach(line => {
    if(isBookId(line)) { createNewBook(line) } 
    else if(isHttpUrl(line)) { currentBook.setUrl(line) } 
    else {
      switch (countForCheckColumnIndex) {
        case 1: currentBook.setTitle(line); break;
        case 2: 
          if(isDateFormat(line)) currentBook.setPurchaseDate(line)
          else currentBook.setAuthor(line)
          break;
        case 3: 
          if(isDateFormat(line)) currentBook.setPurchaseDate(line)
          else currentBook.setPublisher(line)
          break;
        case 4: currentBook.setPurchaseDate(line); break;
      }

      countForCheckColumnIndex++
    }
  })

  ifExistBookThenPushToBookList(currentBook)

  fs.writeFileSync('./initialData.json', JSON.stringify(bookList))
})()
