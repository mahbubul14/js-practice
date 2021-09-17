// eslint-disable-next-line no-array-constructor
let books = new Array();
const displayBooks = document.getElementById('displayBooks');
const addButton = document.getElementById('add');
const date = document.getElementById('date');
// eslint-disable-next-line no-undef
date.innerText = luxon.DateTime.now().toFormat('MMMM dd, yyyy, hh:mm:ss a').toString();
const listLink = document.getElementById('list_link');
const addLink = document.getElementById('add_link');
const contactLink = document.getElementById('contact_link');
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');
form.style.display = 'none';
contact.style.display = 'none';
listLink.style.color = '#fff';
listLink.onclick = () => {
  listLink.style.color = '#fff';
  addLink.style.color = '#000';
  contactLink.style.color = '#000';
  list.style.display = 'block';
  form.style.display = 'none';
  contact.style.display = 'none';
};
addLink.onclick = () => {
  addLink.style.color = '#fff';
  listLink.style.color = '#000';
  contactLink.style.color = '#000';
  list.style.display = 'none';
  form.style.display = 'block';
  contact.style.display = 'none';
};
contactLink.onclick = () => {
  contactLink.style.color = '#fff';
  addLink.style.color = '#000';
  listLink.style.color = '#000';
  list.style.display = 'none';
  form.style.display = 'none';
  contact.style.display = 'block';
};
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    books.push(this);
  }

  remove() {
    books = books.filter((book) => book.title !== this.title || book.author !== this.author);
  }
}
function saveBooks() {
  const myBooks = JSON.stringify(books);
  localStorage.setItem('books', myBooks);
}
function display() {
  displayBooks.innerHTML = ' ';
  books.forEach((book) => {
    const bookContainer = document.createElement('tr');
    bookContainer.style.background = 'grey';
    bookContainer.style.color = 'white';
    bookContainer.style.borderBottom = '1px white solid';
    const bookData = document.createElement('td');
    const buttonData = document.createElement('td');
    bookData.style.display = 'flex';
    bookData.style.justifyContent = 'space-between';
    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.onclick = () => {
      book.remove();
      saveBooks();
      display();
    };
    bookData.innerText = `'${book.title}' by ${book.author}`;
    displayBooks.appendChild(bookContainer);
    bookContainer.appendChild(bookData);
    bookContainer.appendChild(buttonData);
    buttonData.appendChild(remove);
  });
}
function addBook() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  book.add();
  saveBooks();
  display();
  title.value = '';
  author.value = '';
}
addButton.onclick = addBook;
function checkStorage() {
  if (localStorage.getItem('books')) {
    const booksData = JSON.parse(localStorage.getItem('books'));
    booksData.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      newBook.add();
    });
    display();
  }
}
window.onload = checkStorage;