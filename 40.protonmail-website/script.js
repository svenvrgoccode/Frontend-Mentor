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
    console.log(e.target)
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

const menuIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.closeIcon')
const mobMenu = document.querySelector('.mobile-navigation')
const mobDropdown1 = document.querySelector('.mobile-dropdown1')
const mobDropdown2 = document.querySelector('.mobile-dropdown2')
const mobDropdown3 = document.querySelector('.mobile-dropdown3')
const mobDropLink1 = document.querySelector('.mob-drop-link1')
const mobDropLink2 = document.querySelector('.mob-drop-link2')
const mobDropLink3 = document.querySelector('.mob-drop-link3')
const backLink = document.querySelectorAll('.back')
const mobNav = document.querySelector('.mob-nav')

menuIcon.addEventListener('click',(e)=>{
    mobMenu.classList.add('active')
})

closeIcon.addEventListener('click',(e)=>{
    mobMenu.classList.remove('active')
})

mobDropLink1.addEventListener('click',(e)=>{
    mobNav.classList.add('hide')
    mobDropdown1.classList.add('active')
})
mobDropLink2.addEventListener('click',(e)=>{
    mobNav.classList.add('hide')
    mobDropdown2.classList.add('active')
})
mobDropLink3.addEventListener('click',(e)=>{
    mobNav.classList.add('hide')
    mobDropdown3.classList.add('active')
})

backLink.forEach((back)=>{
    back.addEventListener('click',(e)=>{
        mobNav.classList.remove('hide')
        mobDropdown1.classList.remove('active')
        mobDropdown2.classList.remove('active')
        mobDropdown3.classList.remove('active')
    })
})


// SLIDE +++++++++++++++++++++++++++


const slides = document.querySelectorAll('.slide')
const dataLink = document.querySelectorAll('.data-link')

dataLink.forEach((data)=>{
    data.addEventListener('mousemove',(e)=>{
        if(e.target.matches('.data2')){
            slides[0].classList.remove('active')
            slides[2].classList.remove('active')
            slides[3].classList.remove('active')
            slides[1].classList.add('active')

        }
        if(e.target.matches('.data1')){
            slides[1].classList.remove('active')
            slides[2].classList.remove('active')
            slides[3].classList.remove('active')
            slides[0].classList.add('active')

        }
        if(e.target.matches('.data3')){
            slides[1].classList.remove('active')
            slides[0].classList.remove('active')
            slides[3].classList.remove('active')
            slides[2].classList.add('active')

        }
        if(e.target.matches('.data4')){
            slides[1].classList.remove('active')
            slides[0].classList.remove('active')
            slides[2].classList.remove('active')
            slides[3].classList.add('active')

        }
      
    })
})


const slider = document.querySelector('.carousel')
const left = document.querySelector('.left-wrap')
const right = document.querySelector('.right-wrap')
const slideTest = document.querySelectorAll('.carousel .slide')



left.addEventListener('click',(e)=>{
    slider.classList.add('active')
    left.classList.add('hide')
    right.classList.remove('hide')
    slideTest[0].classList.remove('opacity')
    slideTest[2].classList.add('opacity')
})

right.addEventListener('click',(e)=>{
    slider.classList.remove('active')
    right.classList.add('hide')
    left.classList.remove('hide')
    slideTest[2].classList.remove('opacity')
    slideTest[0].classList.add('opacity')
})



const mobileSlide = document.querySelector('.mobile-carousel')
const mobArrows = document.querySelectorAll('.mobile-buttons .icon-wrap')
const mobileLines = document.querySelectorAll('.mobile-lines .line')
let index = 0
let transValue = 108



mobArrows.forEach((arrow)=>{
    arrow.addEventListener('click',(e)=>{
        if(arrow.matches('.mob-right')){
            index++
            if(index > 2){
                index = 0
            }
            mobileSlide.style.transform = `translateX(-${index * transValue}%)`

        }
        if(arrow.matches('.mob-left')){
            index--
            if(index < 0){
                index = 2
            }
            mobileSlide.style.transform = `translateX(-${index * transValue}%)`
        }
    })
})

