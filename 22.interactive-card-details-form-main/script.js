// FORM
const nameForm = document.querySelector('#name')
const numberForm = document.querySelector('#number')
const mmForm = document.querySelector('#mm')
const yyForm = document.querySelector('#yy')
const cvcForm = document.querySelector('#cvc')
const cardForm = document.querySelector('.formContainer')
// ERRORS
const errors = document.querySelectorAll('.errText')
// CREDIT CARD
const numberCard = document.querySelector('.numberCard')
const nameCard = document.querySelector('.nameCard')
const mmCard = document.querySelector('.mmCard')
const yyCard = document.querySelector('.yyCard')
const cvcCard = document.querySelector('.cvc')

const fill = document.querySelector('.fill')
const thanks = document.querySelector('.thanks')


addListener(nameForm,nameCard)
addListener(numberForm,numberCard)
addListener(mmForm,mmCard)
addListener(yyForm,yyCard)
addListener(cvcForm,cvcCard)





cardForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    nameCheck()
    cardCheck()
    mmCheck()
    yyCheck()
    cvcCheck()

    const pass = document.querySelectorAll('.pass')
    console.log(pass)
    if(pass.length === 5){
        fill.style.display = 'none'
        thanks.classList.add('activeThanks')

    }

})


// FUNCTIONS

function addListener(form,card){
    form.addEventListener('input',(e)=>{
        card.innerHTML = form.value
    })
}

function nameCheck(){
    let nameValue = nameForm.value
    // const regex = /^([\w]{3,})+\s+([\w]{3,})+$/i
    const regex = /^([A-Za-z]{3,})+\s+([A-Za-z]{3,})/i

    if(nameValue === ''){
        errors[0].innerText = `Full name can't be blank`
        nameForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
            errors[0].innerText = ``
            },2000)
    }else if(!nameValue.match((regex))){
        errors[0].innerText = `This is not a full name`
        nameForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
        errors[0].innerText = ``
        },2000)
    }
    if(nameValue.match((regex))){
        errors[0].setAttribute('class','pass')
    }
  

  
}

function cardCheck(){
    let numberValue = numberForm.value
    const regex = /^([0-9]{4,})+\s+([0-9]{4,})+\s+([0-9]{4,})+\s+([0-9]{4,})/

    if(numberValue === ''){
        errors[1].innerText = `Card number can't be blank`
        numberForm.style.border = '2px solid #C55C60'
        setTimeout(()=>{
            errors[1].innerText = ''
        },2000)
    }else if(!numberValue.match(regex)){
        errors[1].innerText = `Invalid card nubmer`
        numberForm.style.border = '2px solid #C55C60'
        setTimeout(()=>{
            errors[1].innerText = ''
        },2000)

    }
    if(numberValue.match((regex))){
        errors[1].setAttribute('class','pass')
    }
   

}

function mmCheck(){
    let mmValue = mmForm.value
    const regex = /^([1-12]{2,})/

    if(mmValue === ''){
        errors[2].innerText = `Can't be blank`
        mmForm.style.border = '2px solid #C55C60'
     
        setTimeout(()=>{
            errors[2].innerText = ''
        },2000)

    }else if(!mmValue.match(regex)){
        errors[2].innerText = `Invalid month`
        mmForm.style.border = '2px solid #C55C60'
        setTimeout(()=>{
            errors[2].innerText = ''
        },2000)
    }
    if(mmValue.match((regex))){
        errors[2].setAttribute('class','pass')
    }
    
}


function yyCheck(){
    let yyValue = yyForm.value
    const regex = /^(20|23)\d{2}$/

    if(yyValue === ''){
        errors[3].innerText = `Year can't be blank`
        yyForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
            errors[3].innerText = ``
            },2000)
      
    }else if(!yyValue.match(regex)){
        errors[3].innerText = `Invalid year`
        yyForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
            errors[3].innerText = ``
            },2000)
    
    }
    if(yyValue.match((regex))){
        errors[3].setAttribute('class','pass')
    }
    
    

}

function cvcCheck(){
    let cvcValue = cvcForm.value
    const regex = /^([0-9]{3,})/

    if(cvcValue === ''){
        errors[4].innerText = `Can't blank`
        cvcForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
        errors[4].innerText = ``
        },2000)
        
    }else if(!cvcValue.match(regex)){
        errors[4].innerText = 'Invalid cvc'
        cvcForm.style.border = '2px solid #C55C60'
        setTimeout(function(){
            errors[4].innerText = ``
            },2000)
    
    }
    if(cvcValue.match((regex))){
        errors[4].setAttribute('class','pass')
    }
   
}
