const dropdown1 = document.querySelector('.dropdown1')
const dropdown1Link = document.querySelector('.dropdown1-link')
const dropdown2 = document.querySelector('.dropdown2')
const dropdown2Link = document.querySelector('.dropdown2-link')
const dropdown3 = document.querySelector('.dropdown3')
const dropdown3Link = document.querySelector('.dropdown3-link')
const angles = document.querySelectorAll('.link-angle')

dropdown1Link.addEventListener('click',(e)=>{
    dropdown1.classList.toggle('active')
    angles[0].classList.toggle('active')
    dropdown1Link.classList.toggle('active')

})
dropdown2Link.addEventListener('click',(e)=>{
    dropdown2.classList.toggle('active')
    angles[1].classList.toggle('active')
    dropdown2Link.classList.toggle('active')
})
dropdown3Link.addEventListener('click',(e)=>{
    dropdown3.classList.toggle('active')
    angles[2].classList.toggle('active')
    dropdown3Link.classList.toggle('active')
})

window.onclick = function(e){
    if(!e.target.matches('.dropdown1') && !e.target.matches('.dropdown1-link') && dropdown1.classList.contains('active')){
        dropdown1.classList.remove('active')
        angles[0].classList.remove('active')
        dropdown1Link.classList.remove('active')
    }
    if(!e.target.matches('.dropdown2') && !e.target.matches('.dropdown2-link') && dropdown2.classList.contains('active')){
        dropdown2.classList.remove('active')
        angles[1].classList.remove('active')
        dropdown2Link.classList.remove('active')
    }
    if(!e.target.matches('.dropdown3') && !e.target.matches('.dropdown3-link') && dropdown3.classList.contains('active')){
        dropdown3.classList.remove('active')
        angles[2].classList.remove('active')
        dropdown3Link.classList.remove('active')
    }
}