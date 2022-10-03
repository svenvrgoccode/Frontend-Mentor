const menu = document.querySelector('.mobile-navigation')
const menuIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-xmark')
const mobBg = document.querySelector('.mobile-bg')


menuIcon.addEventListener('click',(e)=>{
    menu.classList.add('active')
    menuIcon.classList.add('close')
    closeIcon.classList.add('active')
    mobBg.classList.add('active')
})


closeIcon.addEventListener('click',(e)=>{
    menu.classList.remove('active')
    menuIcon.classList.remove('close')
    closeIcon.classList.remove('active')
    mobBg.classList.remove('active')
})


