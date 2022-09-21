const submitMail = document.querySelector('.submit-email')
const emailInput = document.querySelector('.email-input')
const submitBtn = document.querySelector('.submit-button')
const notice = document.querySelector('.notice')



submitMail.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(emailInput.value === ''){
        notice.classList.add('noticeActive')
        notice.textContent = 'Oops! Please add your email'
        setTimeout(function(){
            notice.classList.remove('noticeActive')
        },2000)
    }else if(!isEmail(emailInput)){
        notice.classList.add('noticeActive')
        notice.textContent = 'Oops! That doesn’t look like an email address'
        setTimeout(function(){
            notice.classList.remove('noticeActive')
        },2000)
    }
    console.log(emailInput)
    
})



function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}