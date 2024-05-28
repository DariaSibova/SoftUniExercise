class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {
    const book = {
      title: title,
      author: author,
    };

    if (this.books.find((item) => item.title === book.title)) {
      return `The book "${book.title}" by ${book.author} is already in ${this.library} library.`;
    }

    this.books.push(book);
    return `The book "${book.title}" by ${book.author} has been added to The ${this.library} library.`;
  }

  addMember(memberName) {
    if (this.members.includes(memberName)) {
      return `Member ${memberName} is already a part of the book club.`;
    }

    this.members.push(memberName);
    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
      throw new Error(`Member ${memberName} not found.`);
    }

    if (!this.books.map((item) => item.title).includes(bookTitle)) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    const book = this.books.find((item) => item.title === bookTitle);
    this.books = this.books.filter((item) => item.title !== bookTitle);
    return `Member ${memberName} has been assigned the book "${bookTitle}" by ${book.author}.`;
  }

  generateReadingReport() {
    if (!this.members.length) {
      return `No members in the book club.`;
    }

    if (!this.books.length) {
      return `No available books in the library.`;
    }

    return `Available Books in ${this.library} library: ${this.books
      .map((book) => `\n"${book.title}" by ${book.author}`)
      .join("")}`;
  }
}

