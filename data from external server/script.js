let getJokes = document.getElementById('getJokes');

getJokes.addEventListener('click', loadData);

function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.chucknorris.io/jokes/random`,true);
    xhr.onload = function(){
        let data = JSON.parse(this.responseText);
        let value = data.value;
        document.getElementById('jokestext').innerText = value;
        console.log(value);
    }
    xhr.send()
}