// ...................ajax intro...............
// AJAX = Asynchronous Javascript and XML
// akta code functtion korte late korle onno function tar moto cholte thakbe
    //> get data without loading the page

let btn = document.getElementById('getbtn');

btn.addEventListener('click', loadData);

function loadData() {
    //create XHR - (XmlHttp request) object
    let xhr = new XMLHttpRequest();

    //open
    xhr.open('GET','data.txt', true)

    xhr.onload = function() {
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
        }
    }
    xhr.send()
        console.log(xhr);
}