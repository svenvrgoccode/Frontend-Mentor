const accordion = document.querySelector('.accordion')
const box = document.querySelector('.box')

accordion.addEventListener('click',(e)=>{
    const clickedItem = e.target.closest('li')
    const question = clickedItem.querySelector('.question')
       question.nextElementSibling.classList.toggle('activeAnswer')
   
  
    if(question.nextElementSibling.classList.contains('activeAnswer')){
        box.classList.add('anime')
        const textFocus = question.firstElementChild
        textFocus.style.color = 'black'
    }else{
        const textFocus = question.firstElementChild
        box.classList.remove('anime')

        textFocus.style.color = 'grey'
    }
  
})