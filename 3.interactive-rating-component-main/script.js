const circles = document.querySelectorAll('.circle-wrap button')
const form = document.querySelector('.review-form')
const submitBtn = document.querySelector('.submitBtn')
const reviewBox = document.querySelector('.review')
const value = document.querySelector('.value')
const submitBox = document.querySelector('.submit')



// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
  
// })
let reviewValue

circles.forEach((circle)=>{
    circle.addEventListener('click',(e)=>{
        reviewValue = parseInt(e.target.textContent) 
        console.log(typeof reviewValue)
    })
})



submitBtn.addEventListener('click',()=>{
    if(reviewValue > 0){
        submitBox.style.display = 'none'
        reviewBox.style.display = 'flex'
        value.style.display = 'block'
        value.textContent = `You selected ${reviewValue} out of 5`
    }

})

