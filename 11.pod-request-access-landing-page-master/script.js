const formEmail = document.querySelector('.submit-email')
const notice = document.querySelector('.notice ')
const input = document.querySelector('.inputField')
const submitBtn = document.querySelector('.submitBtn')


formEmail.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value === ''){
    notice.style.opacity = '1'

        notice.textContent = `You're form is empty`
        setTimeout(function(){
            notice.style.opacity = '0'
        },4000)
    }
})


input.addEventListener('invalid',(e)=>{
    e.preventDefault()
    notice.style.opacity = '1'
    notice.textContent = 'Please enter a valid Email Adress!'
    setTimeout(function(){
        notice.style.opacity = '0'
    },4000)

})



