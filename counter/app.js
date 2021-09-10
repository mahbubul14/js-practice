let count = 0;
const value = document.querySelector('#value');
// const dec =document.querySelector('.decrease');
// const reset =document.querySelector('.reset');
// const inc =document.querySelector('.increase');
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        } else if(styles.contains('decrease')){
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;
    })
})

 