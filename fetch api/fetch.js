document.getElementById("get_data").addEventListener('click', getData)

function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err);
        })
}