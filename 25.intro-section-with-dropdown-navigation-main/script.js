const dropdownLink1 = document.querySelector('.link1')
const dropdownLink2 = document.querySelector('.link2')
const dropdown1 = document.querySelector('.drop1')
const dropdown2 = document.querySelector('.drop2')
const angleArrow = document.querySelectorAll('.fa-angle-right')
const mobDropdowns = document.querySelectorAll('.mob-dropdown')
const mobLinks = document.querySelectorAll('.mob-link')
const mobAngle = document.querySelectorAll('.mobile-angle')
const bars = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-xmark')
const mobHead = document.querySelectorAll('.mobHead')


dropdownLink1.addEventListener('click',()=>{
    dropdown1.classList.toggle('dropdownActive')
    angleArrow[0].classList.toggle('angleActive')
})
dropdownLink2.addEventListener('click',()=>{
    dropdown2.classList.toggle('dropdownActive')
    angleArrow[1].classList.toggle('angleActive')
})


mobLinks[0].addEventListener('click',()=>{
    mobDropdowns[0].classList.toggle('mob-dropdown-active')
    mobAngle[0].classList.toggle('active')
})
mobLinks[1].addEventListener('click',()=>{
    mobDropdowns[1].classList.toggle('mob-dropdown-active')
    mobAngle[1].classList.toggle('active')
})



bars.addEventListener('click',(e)=>{
    mobHead.forEach((head)=>{
        head.classList.add('active')
    })

})
close.addEventListener('click',(e)=>{
    mobHead.forEach((head)=>{
        head.classList.remove('active')
    })

})



