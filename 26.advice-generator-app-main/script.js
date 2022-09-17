const dice = document.querySelector('.dice-wrap')
const advice = document.querySelector('.advice')
const adviceId = document.querySelector('.adviceId')


window.onload = showQuote;



dice.addEventListener('click',()=>{
    showQuote()
})

function showQuote(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        advice.textContent = data.advice
        adviceId.textContent = data.id
    })
}


