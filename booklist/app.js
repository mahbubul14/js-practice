let title = document.getElementById('title');
let author = document.getElementById('author');
let submit = document.getElementById('submit')
let list = document.querySelector('.list')

submit.addEventListener('click', function(e){
  e.preventDefault();
  let listRow = document.createElement('tr')
  let listTitle = document.createElement('td')
  let listAuthor = document.createElement('td')
  listTitle.innerHTML = title.value;
  listAuthor.innerHTML = author.value;
  list.appendChild(listRow);
  listRow.appendChild(listTitle);
  listRow.appendChild(listAuthor);
})
