let btn = document.getElementsByClassName('btn-primary')[0];
let header = document.querySelector('h1');

btn.addEventListener('click',()=>{
    header.classList.add('text-success','text-center')
   
})