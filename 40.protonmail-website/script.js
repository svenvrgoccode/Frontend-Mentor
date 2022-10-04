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


// TESTIMONIAL

const leftArrow = document.querySelector('.left-wrap')
const rightArrow = document.querySelector('.right-wrap')
const slideRow = document.querySelector('.slideRow')
const lines = document.querySelectorAll('.line')
const first = document.querySelector('.first')
const last = document.querySelector('.last')

leftArrow.addEventListener('click',(e)=>{
    slideRow.classList.add('left')
    rightArrow.classList.remove('hide')
    leftArrow.classList.add('hide')
    lines[1].classList.add('color')
    lines[0].classList.remove('color')
    last.classList.remove('slideOpacity')
    first.classList.add('slideOpacity')

})
rightArrow.addEventListener('click',(e)=>{
    slideRow.classList.remove('left')
    leftArrow.classList.remove('hide')
    rightArrow.classList.add('hide')
    lines[0].classList.add('color')
    lines[1].classList.remove('color')
    last.classList.add('slideOpacity')
    first.classList.remove('slideOpacity')
})




