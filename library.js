export default class Library { 
  constructor (books = []) {
    this.books = books;
  };

  bookCount = function () {
    return this.books.length;
  };

  addBook = function (newBook) {
    this.books.push(newBook);
  };

  addBooks = function (newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  printInventory = function () {
    this.books.forEach(({title, author} = book) => {
      console.log(`${title} by ${author}`);
    });
  };

}


