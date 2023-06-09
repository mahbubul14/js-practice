// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class: Handle UI class
class UI {
    static displayBooks(){
        const  StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '121212'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: 131313
            }
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static  addBookToList(book){
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr');
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#">Delete</a></td>
        `;
        list.appendChild(row);

    }
}

//Store class: Handle storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
submit.addEventListener('click', (e)=>{
e.preventDefault();
//Get from values
const title =  document.querySelector('#title').value;
const author =  document.querySelector('#author').value;
const isbn =  document.querySelector('#isbn').value;
// Instatiate book
const book = new Book(title, author, isbn);
//Add book to ui
UI.addBookToList(book);
})


//Remove a boook