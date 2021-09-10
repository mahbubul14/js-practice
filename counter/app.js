let count = 0;
const value = document.querySelector('#value');
const dec =document.querySelector('.decrease');
const reset =document.querySelector('.reset');
const inc =document.querySelector('.increase');

inc.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('increase')){
        count++;
    }
    value.textContent = count;
})

 