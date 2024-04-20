// ----------------------------------------1-------------------------------------------
// const bookshelf = ["Book 1", "Book 2", "Book 3", "Book 4, book 5, book 6"];
// const numberOfBooks = bookshelf.length;
// console.log(numberOfBooks);
//----------------------------------------2-------------------------------------------

// function Book(title, author, genre, pages, isRead) {
//   this.title = title;
//   this.author = author;
//   this.genre = genre;
//   this.pages = pages;
//   this.isRead = isRead;
// }

// var book1 = new Book(
//   "The Great Gatsby",
//   "F. Scott Fitzgerald",
//   "Classic",
//   218,
//   true
// );
// var book2 = new Book(
//   "To Kill a Mockingbird",
//   "Harper Lee",
//   "Fiction",
//   324,
//   false
// );
// var book3 = new Book("1984", "George Orwell", "Dystopian", 328, true);

// console.log(book1.title);
// console.log(book2.author);
// console.log(book3.pages);
// console.log(book1.isRead);
//----------------------------------------3-------------------------------------------
// var bookshelf = {
//   books: [],

//   addBook: function (title, author, genre, pages, isRead) {
//     var newBook = {
//       title: title,
//       author: author,
//       genre: genre,
//       pages: pages,
//       isRead: isRead,
//     };

//     this.books.push(newBook);
//   },
// };

// bookshelf.addBook(
//   "million dollarlik xatolar",
//   "adam smart",
//   "Classic",
//   777,
//   false
// );
// bookshelf.addBook(
//   "sariq devni minib",
//   "Xudoyberdi To'xtaboyev",
//   "asar",
//   221,
//   true
// );

// console.log(bookshelf.books);
//----------------------------------------4-------------------------------------------
// var bookshelf = {
//   books: [],

//   addBook: function (title, author, genre, pages, isRead) {
//     var newBook = {
//       title: title,
//       author: author,
//       genre: genre,
//       pages: pages,
//       isRead: isRead,
//     };

//     this.books.push(newBook);
//   },

//   markAsRead: function (title) {
//     for (var i = 0; i < this.books.length; i++) {
//       if (this.books[i].title === title) {
//         this.books[i].isRead = true;
//         break;
//       }
//     }
//   },
// };

// bookshelf.addBook(
//   "xudoyberdi to'xtaboyev",
//   "QUYONLAR SALTANATI",
//   "ASAR  ",
//   234,
//   false
// );
// bookshelf.addBook("KAPITAL BOSHQARUVI", "ILON MASK", "Romance", 416, false);

// console.log(bookshelf.books);

// bookshelf.markAsRead("The Catcher in the Rye");
// console.log(bookshelf.books);
//---------------------------------------Building a Contact Management System--------
//---------------------------------------1-------------------------------------------
// var contactList = [];

// var contact1 = {
//   name: "yoldashev mirjon",
//   email: "mirjonyoldashev@example.com",
//   phone: "+998 33 306 00 16",
// };

// var contact2 = {
//   name: "yoldashev",
//   email: "yoldasyoldashev@example.com",
//   phone: "+998 95 937 00 17",
// };

// contactList.push(contact1);
// contactList.push(contact2);

// console.log(contactList);
//---------------------------------------2-------------------------------------------
// var contactList = [];

// var contact1 = {
//   name: "mirjon yoldashev",
//   email: "mirjonyoldashev@example.com",
//   phone: "+998 33 306 00 16",
//   address: {
//     street: "yunusabad-uch qahramon mahalasi-10-16-67",
//     city: "tashkent",
//     country: "uzbekistan",
//   },
// };

// var contact2 = {
//   name: "yoldashev",
//   email: "yoldasyoldashev@example.com",
//   phone: "+998 95 937 00 17",
//   address: {
//     street: "chilanzar-katartal-9-6-45",
//     city: "toshkent-chilanzar",
//     country: "uzbekistan-toshkent",
//   },
// };

// contactList.push(contact1);
// contactList.push(contact2);

// console.log(contactList);
//---------------------------------------3-------------------------------------------
// var contactList = [];

// function addContact(name, email, phone, address) {
//   var newContact = {
//     name: name,
//     email: email,
//     phone: phone,
//     address: address,
//   };

//   contactList.push(newContact);
// }

// var address1 = {
//   street: "yunusabad-uch qahramon mahalasi-10-16-67",
//   city: "tashkent",
//   country: "Uzbekistan",
// };

// addContact(
//   "mirjon",
//   "mirjonyoldashev@example.com",
//   "+998 33 306 00 16",
//   address1
// );

// console.log(contactList);
//---------------------------------------4-------------------------------------------
var contact = {
  name: "mirjon yoldashev",
  email: "mirjonyoldashev@example.com",
  phone: "+998 33 306 00 16",
  address: {
    street: "Yunusabad-uch qahramon mahalasi-10-16-67",
    city: "tashkent",
    country: "uzbekistan",
  },
};

var { name, email } = contact;

console.log(name);
console.log(email);
