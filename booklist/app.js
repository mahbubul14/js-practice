//Get the UI elements
let form = document.querySelector('#book-form')


//Book class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

class UI{
    constructor(){

    }
    addToBookList(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    clearFields() {
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }
}

//add event listener
form.addEventListener('submit', newBook);


//define functions
function newBook(e){
    let title = document.getElementById('title').value,
     author = document.getElementById('author').value,
     isbn = document.getElementById('isbn').value

    let book = new Book(title, author,isbn);

    let ui = new UI()
    ui.addToBookList(book);
    ui.clearFields();
    e.preventDefault();
}