const email = document.querySelector('.email')
const errorText = document.querySelector('.errorText')
const form = document.querySelector('.email-wrap')

form.addEventListener('submit',(e)=>{

    e.preventDefault()

    checkInput()
})


function checkInput(){

    const emailValue = email.value.trim()

    if(emailValue === '' || null){
        
        errorText.innerText = 'Please provide a valid email adress'
        
    }else if(!isEmail(email)){
        errorText.innerText = 'This is not a email address'

    }
    
}



function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
  