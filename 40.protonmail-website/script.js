const dropdown1 = document.querySelector('.dropdown1')
const dropdown1Link = document.querySelector('.dropdown1-link')
const angles = document.querySelectorAll('.link-angle')

dropdown1Link.addEventListener('click',(e)=>{
    dropdown1.classList.toggle('active')
    angles[0].classList.toggle('active')
    dropdown1Link.classList.toggle('active')
    
})

