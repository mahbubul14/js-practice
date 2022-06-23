var button = document.querySelector('button');

button.onclick = function() {
 let p = document.createElement('p');
p.innerHTML="Clicked!"
let body =document.querySelector('body')
body.appendChild(p)
}
// .........................................................
// random color generator
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255);
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.querySelector('button');

// create event listener to change color on button click
button.onclick = function(){
	this.style.color = randomColor();
}
// ...........................................................................

// write your code here
var todoList = document.getElementById('todoList');
var additems = document.getElementById('addTodo');
additems.onclick = function(){
    var todo_obj = document.getElementById("todo").value;
    
    if (todo_obj !== ""){

        var li = document.createElement('li');
        li.innerHTML = todo_obj;
        todoList.appendChild(li);
        document.getElementById("todo").value = "";

    }
}




let h1 = document.querySelector('h1');
h1.style.width= "50%";  