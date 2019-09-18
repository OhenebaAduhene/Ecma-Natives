const Book = require('./book');
// const book = new Book('gardening');
// console.log('Book:', book);
// console.log('title:', book.title);
//
// const secondBook = new Book('cooking');
// console.log('Second Book:', secondBook);
// console.log('Second title:', secondBook.title);
// const book = new Book('gardening');
// book.logTitle();
// book.logTitleAfter(2);

const book = new Book('gardening');
console.log('Book:', book);
console.log('title:', book.title);

const secondBook = new Book('cooking');
console.log('Second Book:', secondBook);
console.log('Second title:', secondBook.title);

book.logTitle();
book.logTitleAfter(2);

console.log(Book.favorites());
