const bar = document.getElementById('bar');
const ul = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',() => {
        ul.classList.add('active')
    })
}