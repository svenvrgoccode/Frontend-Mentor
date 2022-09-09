
const emailForm = document.querySelector('.emailForm')
const  emailInput = document.querySelector('.emailInput')
const submitBtn = document.querySelector('.submitBtn')
const notices = document.querySelectorAll('.notice')


emailInput.addEventListener('invalid',(e)=>{
    e.preventDefault()

    notices.forEach((notice)=>{
        notice.classList.add('activeNotice')
        if(notice.tagName === 'DIV'){
            notice.innerHTML = `<p>Please add valid email addres !
            </p>`
            
        }
        setTimeout(function(){
            notice.classList.remove('activeNotice')
    
                },2000)
    })
    
})


emailForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(emailInput.value === ''){
        notices.forEach((notice)=>{
            notice.classList.add('activeNotice')
            if(notice.tagName === 'DIV'){
                notice.innerHTML = `<p>Field is Empty!
                </p>`
                
            }
            setTimeout(function(){
                notice.classList.remove('activeNotice')
        
                    },2000)
        })
    }
})

