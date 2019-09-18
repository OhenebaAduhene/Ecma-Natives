const { timer,sortLetter } = require('./tools');

class Book {
  constructor(title) {
    this.title = title;
    this.sorting = title.charAt(0); // first character of our title
  }

  logTitle() {
    console.log('book:', this);
    console.log(this.title);
  }

  logTitleAfter(seconds) {
    const miliseconds = seconds * 1000;
    setTimeout(() => {
      this.logTitle();
    }, miliseconds);
  }

  static favorites() {
    return [new Book('Gardening'), new Book('Cooking'), new Book('Fishing')];
  }
}

module.exports = Book;
