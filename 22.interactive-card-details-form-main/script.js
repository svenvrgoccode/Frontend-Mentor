// FORM
const nameForm = document.querySelector('#name')
const numberForm = document.querySelector('#number')
const mmForm = document.querySelector('#mm')
const yyForm = document.querySelector('#yy')
const cardForm = document.querySelector('.formContainer')
// ERRORS
const errors = document.querySelectorAll('.errText')
// CREDIT CARD
const numberCard = document.querySelector('.numberCard')
const nameCard = document.querySelector('.nameCard')
const mmCard = document.querySelector('.mmCard')
const yyCard = document.querySelector('.yyCard')




addListener(nameForm,nameCard)
addListener(numberForm,numberCard)
addListener(mmForm,mmCard)
addListener(yyForm,yyCard)


cardForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    nameCheck()
})


// FUNCTIONS

function addListener(form,card){
    form.addEventListener('input',(e)=>{
        card.innerHTML = form.value
    })
}

function nameCheck(){
    let nameValue = nameForm.value
    const regex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i

    if(nameValue === ''){
        errors[0].innerText = `Full name can't be blank`
        nameForm.style.border = '2px solid #C55C60'


    }else if(!nameValue.match((regex))){
        errors[0].innerText = `This is not a full name`
        nameForm.style.border = '2px solid #C55C60'
    }
}


