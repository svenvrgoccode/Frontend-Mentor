const dropdownLinks = document.querySelectorAll('.dropdownLink')
const dropdown1 = document.querySelector('.dropdown1')
const dropdown1Link = document.querySelector('.dropdownLink1')
const dropdown2 = document.querySelector('.dropdown2')
const dropdown2Link = document.querySelector('.dropdownLink2')
const dropdown3 = document.querySelector('.dropdown3')
const dropdown3Link = document.querySelector('.dropdownLink3')
const angles = document.querySelectorAll('.dropdown-angle')

dropdownLinks.forEach((dropdownLink,index)=>{
    dropdownLink.addEventListener('click',(e)=>{
        const dropdown = e.target.closest("li").querySelector('.dropdown')
        const dropdownAngle = e.target.closest("li").querySelector('.dropdown-angle')
        dropdownLink.classList.toggle('active')
        dropdownAngle.classList.toggle('active')
        dropdown.classList.toggle('active')


    })
})
window.onclick = function(e){
    if(!e.target.matches('.dropdown1') && !e.target.matches('.dropdownLink1') && dropdown1.classList.contains('active')){
        dropdown1.classList.remove('active')
        angles[0].classList.remove('active')
        dropdown1Link.classList.remove('active')
    }
    if(!e.target.matches('.dropdown2') && !e.target.matches('.dropdownLink2') && dropdown2.classList.contains('active')){
        dropdown2.classList.remove('active')
        angles[1].classList.remove('active')
        dropdown2Link.classList.remove('active')
    }
    if(!e.target.matches('.dropdown3') && !e.target.matches('.dropdownLink3') && dropdown3.classList.contains('active')){
        dropdown3.classList.remove('active')
        angles[2].classList.remove('active')
        dropdown3Link.classList.remove('active')
    }
}


//MOBDROPWN

const mobdropdownLink = document.querySelectorAll('.mobdropdownLink')
const mobul = document.querySelector('.mobul')
const mobdropdown =  document.querySelectorAll('.mobdropdown')
const back = document.querySelectorAll('.back')
const close = document.querySelector('.close')
const mobileHeader = document.querySelector('.mob-container')
const menu = document.querySelector('.fa-bars')


back.forEach((back)=>{
    back.addEventListener('click',(e)=>{
        mobdropdown[0].classList.remove('active')
        mobdropdown[1].classList.remove('active')
        mobdropdown[2].classList.remove('active')
        mobul.classList.remove('active')
    })
})


menu.addEventListener('click',(e)=>{
    mobileHeader.classList.add('active')
})

close.addEventListener('click',(e)=>{
    mobileHeader.classList.remove('active')

    
})


mobdropdownLink.forEach((moblink)=>{
    moblink.addEventListener('click',(e)=>{
        if(moblink.matches('.mobdropdownLink1')){
            mobul.classList.add('active')
            mobdropdown[0].classList.add('active')
        }
        if(moblink.matches('.mobdropdownLink2')){
            mobul.classList.add('active')
            mobdropdown[1].classList.add('active')
        }
        if(moblink.matches('.mobdropdownLink3')){
            mobul.classList.add('active')
            mobdropdown[2].classList.add('active')
        }
    

        
    })
})




//RULE SLIDE

const ruleSlide = document.querySelectorAll('.rule-slide')
const ruleTab = document.querySelectorAll('.rules .tab')


ruleTab.forEach((data)=>{
    data.addEventListener('mousemove',(e)=>{
        if(e.target.matches('.data2')){
            ruleSlide[0].classList.remove('active')
            ruleSlide[2].classList.remove('active')
            ruleSlide[3].classList.remove('active')
            ruleSlide[1].classList.add('active')

        }
        if(e.target.matches('.data1')){
            ruleSlide[1].classList.remove('active')
            ruleSlide[2].classList.remove('active')
            ruleSlide[3].classList.remove('active')
            ruleSlide[0].classList.add('active')

        }
        if(e.target.matches('.data3')){
            ruleSlide[1].classList.remove('active')
            ruleSlide[0].classList.remove('active')
            ruleSlide[3].classList.remove('active')
            ruleSlide[2].classList.add('active')

        }
        if(e.target.matches('.data4')){
            ruleSlide[1].classList.remove('active')
            ruleSlide[0].classList.remove('active')
            ruleSlide[2].classList.remove('active')
            ruleSlide[3].classList.add('active')

        }
      
    })
})


// TESTIMONIAL

const arrows = document.querySelectorAll('.testimonial .icon-wrap')
const testiWrap = document.querySelector('.testimonial-wrap')
const lines = document.querySelectorAll('.testimonial .line')
const cards = document.querySelectorAll('.testimonial .card')




arrows.forEach((arrow) => {
    arrow.addEventListener('click',(e)=>{
        if(arrow.matches('.right')){
            testiWrap.classList.add('active')
            lines[0].classList.remove('active')
            lines[1].classList.add('active')
            arrows[1].classList.remove('active')
            arrows[0].classList.add('active')
            cards[0].classList.add('active')
            cards[2].classList.remove('active')

        }
        if(arrow.matches('.left')){
            testiWrap.classList.remove('active')
            lines[1].classList.remove('active')
            lines[0].classList.add('active')
            arrows[0].classList.remove('active')
            arrows[1].classList.add('active')
            cards[2].classList.add('active')
            cards[0].classList.remove('active')


        }
    })
})




const accordLink = document.querySelectorAll('.accord')

accordLink.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        const accordUl = e.target.closest(".lg-txt").nextElementSibling
        const plus = e.target.closest('.lg-txt').querySelector('.foot-plus')
        accordUl.classList.toggle('active')
        if(accordUl.classList.contains('active')){
           plus.src = "../icons/minus-solid.svg"

        }else{
           plus.src = "../icons/plus-solid.svg"

        }
    })
})



const carousel = document.querySelector('.carousel')
const slides = Array.from(carousel.children)
const nextButton = document.querySelector('.rightmob')
const prevButton = document.querySelector('.leftmob')
const dotsNav = document.querySelector('.dots')
const dots = Array.from(dotsNav.children)




const slideWidth = slides[0].getBoundingClientRect().width


// SETTING SLIDES



const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)


// MOVE FUNCTION

const moveToSlide = (carousel,currentSlide,targetSlide) => {
    carousel.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('currentSlide')
    targetSlide.classList.add('currentSlide')
}


// UPDATE DOTS

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('currentSlide')
    targetDot.classList.add('currentSlide')
}

// HIDE ARROWS

const hideArrows = (slides,prevButton,nextButton,targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('isHidden')
        nextButton.classList.remove('isHidden')
    }else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('isHidden')
        nextButton.classList.add('isHidden')
    }else{
        prevButton.classList.remove('isHidden')
    }
}

// PREV BUTTON

prevButton.addEventListener('click',(e)=>{
    const currentSlide = carousel.querySelector('.currentSlide')
    const prevSlide = currentSlide.previousElementSibling

    
    currentSlide.classList.add('hidden')
    prevSlide.classList.remove('hidden')

    const currentDot = dotsNav.querySelector('.currentSlide')
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    updateDots(currentDot,prevDot)
    moveToSlide(carousel,currentSlide,prevSlide)
    hideArrows(slides,prevButton,nextButton,prevIndex)
    
})


// NEXT BUTTON

nextButton.addEventListener('click',(e)=>{
    const currentSlide = carousel.querySelector('.currentSlide')
    const nextSlide = currentSlide.nextElementSibling
    
    nextSlide.classList.remove('hidden')
    currentSlide.classList.add('hidden')
    
    const currentDot = dotsNav.querySelector('.currentSlide')
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    updateDots(currentDot,nextDot)
    moveToSlide(carousel,currentSlide,nextSlide)
    hideArrows(slides,prevButton,nextButton,nextIndex)

    
    
})


dotsNav.addEventListener('click',e => {
    const targetDot = e.target.closest('button')

    if(!targetDot) return;

    const currentSlide = carousel.querySelector('.currentSlide')
    const currentDot = dotsNav.querySelector('.currentSlide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex] 

    moveToSlide(carousel,currentSlide,targetSlide)
    updateDots(currentDot,targetDot)

    hideArrows(slides,prevButton,nextButton,targetIndex)
    
})