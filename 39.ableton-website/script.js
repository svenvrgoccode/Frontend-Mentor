const modal = document.querySelectorAll('.modal-wrap')
const modalBg = document.querySelector('.modal-bg')
const ytPost = document.querySelectorAll('.post-wrap')
const modalClick = document.querySelectorAll('.modal-click')
const modalClose  = document.querySelectorAll('.fa-xmark') 


modalClose.forEach((close)=>{
    close.addEventListener('click',(e)=>{
        e.preventDefault()
        const currentClose = e.target.parentNode
        currentClose.classList.remove('showModal')
        modalBg.classList.remove('showModal')

    })
})



modalClick.forEach((modal)=>{
    modal.addEventListener('click',(e)=>{

        const currentModal = e.target.nextElementSibling.querySelector('.modal-wrap')
        currentModal.classList.add('showModal')
        modalBg.classList.add('showModal')
    })
})


