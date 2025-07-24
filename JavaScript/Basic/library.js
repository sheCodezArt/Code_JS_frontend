class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
  }

  sortUserBooks() {
    let answer = prompt("Are you borrowing or returning books? (b/r): ");
    answer = answer.toLowerCase();
    answer = answer.trim();

    if (answer === "b") {
      let numOfBooks = Number(prompt("How many books do you want? "));
      
      for (let i = 0; i < numOfBooks; i++) {
        let bookTitle = prompt(`Enter book ${i+1} title:`);
        bookTitle = bookTitle.trim();
        let bookAuthor = prompt(`Enter author of "${bookTitle}":`);
        bookAuthor = bookAuthor.trim();
        
        if (bookTitle && bookAuthor) {
          this.addBook(bookTitle, bookAuthor);
        }
        else {
          alert("Invalid input! Try again.");
          i--;
        }
      }

      this.books.sort((a, b) => a.title.localeCompare(b.title));
      console.log("Library books sorted by title:");
      this.books.forEach(book => console.log(`${book.title} by ${book.author}`));
    } 
    
    else if (answer === "r") {
      let numOfBooks = Number(prompt("How many books are you returning? "));
      
      for (let i = 0; i < numOfBooks; i++) {
        let bookTitle = prompt(`Enter book ${i+1} title:`);
        bookTitle = bookTitle.trim();
        
        let index = this.books.findIndex(book => book.title.toLowerCase() === bookTitle.toLowerCase());
        if (index !== -1) {
          this.books.splice(index, 1);
          console.log(`"${bookTitle}" has been returned.`);
        }
        else {
          alert(`"${bookTitle}" was not found in the library.`);
        }
      }
    } 
    
    else {
      alert("Invalid input! Please enter 'b' or 'r'.");
    }
  }

  searchBooks() {
    let authorName = prompt("Enter author name to search for their books:");
    authorName = authorName.trim();
    authorName = authorName.toLowerCase();
    
    let foundBooks = this.books.filter(book => book.author.toLowerCase() === authorName);
    
    if (foundBooks.length > 0) {
      console.log(`Books by ${authorName}:`);
      foundBooks.forEach(book => console.log(book.title));
    }
    else {
      console.log(`No books found by ${authorName}.`);
    }
  }
}

let myLibrary = new Library();
myLibrary.sortUserBooks();
myLibrary.searchBooks();