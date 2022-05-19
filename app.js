// Dom Selection
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let addBtn = document.querySelector('#addBtn');
let booklist = document.querySelector('#booklist');

// Event listner

addBtn.addEventListener('click', function(e){
  e.preventDefault();

  if(title.value =='' & author.value == '') {
    alert('Please fill the required field')
  } else {
    const newRow = document.createElement('tr');
    // creating title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // creating author
    const newAuthor = document.createElement('th');
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    bookList.appendChild(newRow);

    console.log(newRow);
  }
})

// Basic Validation

// Creating Element

// Append

