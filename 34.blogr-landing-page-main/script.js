const bar = document.querySelector('.bars')
const mobMenu = document.querySelector('.mobile-wrap')



bar.addEventListener('click',()=>{
    mobMenu.classList.toggle('mobile-wrapActive')
    if(mobMenu.classList.contains('mobile-wrapActive')){
      bar.src = 'images/xmark-solid.svg'  
    }else{
      bar.src = 'images/icon-hamburger.svg'  
    }
})







