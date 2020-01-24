let btn = document.getElementsByClassName('btn-primary')[0];
let body = document.querySelector('body');
colorArray = ['green','black','orange','orangered','red'];
btn.addEventListener('click',()=>{
   for (color of colorArray){
        body.style.backgroundColor = color;
   }
})