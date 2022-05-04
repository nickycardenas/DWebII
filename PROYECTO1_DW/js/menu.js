/*menu */
let btnMenu=document.getElementById('btn-menu');
let mainnav=document.getElementById('main-nav');
btnMenu.addEventListener('click',function(){
    mainnav.classList.toggle('mostrar');
});