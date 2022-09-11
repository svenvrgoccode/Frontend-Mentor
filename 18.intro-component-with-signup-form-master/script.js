const form = document.querySelector('.sign--up--form')

const first_name = document.getElementById('first-name')
const last_name = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

const submit_btn = document.querySelector('.submit_btn')





form.addEventListener('submit',(e)=>{
    e.preventDefault()

    check_inputs();
})


function check_inputs(){

    const first_name_value = first_name.value.trim()
    const last_name_value = last_name.value.trim()
    const email_value = email.value.trim()
    const password_value = password.value.trim()

    if(first_name_value === ''){
        set_error_for(first_name,'First name cannot be empty')
    }
    if(last_name_value === ''){
        set_error_for(last_name,'Last name cannot be empty')
    }
    if(email_value === ''){
        set_error_for(email,'Email address cannot be empty')
    }else if(!isEmail(email)){
        set_error_for(email,'This is not valid email address')
    }
    if(password_value === ''){
        set_error_for(password,'Password is empty!')

    }
}


function set_error_for(input,message){
    const error = input.nextElementSibling 
    const text = error.querySelector('.error-text')
    text.innerText = message

    error.classList.add('activeError')


    setTimeout(()=>{
        error.classList.remove('activeError')
    },2000)
}



function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}