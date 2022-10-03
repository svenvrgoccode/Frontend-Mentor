const mobNav = document.querySelector('.mobile-nav')
const mobBg = document.querySelector('.mobile-nav-bg')
const menu = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-xmark')

menu.addEventListener('click',(e)=>{
    mobNav.classList.toggle('active')
    mobBg.classList.add('active')
    if(mobNav.classList.contains('active')){
        closeIcon.classList.add('active')
        menu.classList.add('close')
    }
})


closeIcon.addEventListener('click',(e)=>{
    menu.classList.remove('close')
    closeIcon.classList.remove('active')
    mobNav.classList.remove('active')
    mobBg.classList.remove('active')

})