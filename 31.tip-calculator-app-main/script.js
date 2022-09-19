
//INPUT FIELDS
let billInput = document.querySelector('.bill-input')
let peopleInput = document.querySelector('.people-input')


//TIP AND TOTAL VALUES
let tipAmount = document.querySelector('.tip-amount')
let totalAmount = document.querySelector('.total-amount')


//PERCENTAGE BUTTONS
let tipValue = 0;
let buttons = document.querySelectorAll('.btn')
let customButton = document.querySelector('.custom-btn')


//RESET BUTTON
let resetButton = document.querySelector('.reset-button')


//INPUT FIELD VALUES
let billValue;
let amountOfPeopleValue = 1;




billInput.addEventListener('input',()=>{
    billValue = billInput.value
    if(amountOfPeopleValue != 0){

        updateTotal();
        // updateTipAmount();

    }
})

peopleInput.addEventListener('input',()=>{
    peopleValue = peopleInput.value
    if(peopleValue != 0){
        updateTotal();
        // updateTipAmount();

    }
})


buttons.forEach(button => {
    button.addEventListener('click',()=>{
        if(billValue != null && amountOfPeopleValue != null){
            resetPercentageButtons();
            tipValue = button.innerHTML.replace('%','');
            button.classList.add('percent-button-active')
            updateTipAmount();
        }
    })
})

customButton.addEventListener('click',()=>{
    resetPercentageButtons();
    customButton.innerHTML = `<input type = "text"`

})


function updateTotal(){
    totalAmount.textContent = `${billValue / amountOfPeopleValue}`
}

// function updateTipAmount(){
//     tipAmount.textContent = `${(billValue / 100 * tipValue) / amountOfPeopleValue}`

// }