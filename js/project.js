menu = document.querySelector('.menu')
nav = document.querySelector('.nav')
navbar = document.querySelector('.navbar')
scr= document.querySelector('.scr')



menu.addEventListener('click', ()=>{
    scr.classList.toggle('phn-class')
    nav.classList.toggle('phn-class')
    navbar.classList.toggle('phn-nav')
})