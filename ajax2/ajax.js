let btn = document.getElementById('getbtn')

btn.addEventListener('click', loadData)

function loadData () {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'ajax.txt', true)

    xhr.onload = function() {
        if(this.status === 200) {
            document.getElementById('json').innerText = `${this.responseText}`
        }
    }
    xhr.send();
    // console.log(xhr);
}