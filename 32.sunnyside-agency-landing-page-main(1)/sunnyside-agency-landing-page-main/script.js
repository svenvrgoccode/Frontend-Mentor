const bar = document.querySelector('.fa-bars')
const mobileContainer = document.querySelector('.mobile-container')

bar.addEventListener('click',()=>{
    mobileContainer.classList.toggle('mobile-containerActive')
})



