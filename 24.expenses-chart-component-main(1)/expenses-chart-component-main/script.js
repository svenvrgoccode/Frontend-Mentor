let dateWrap = document.querySelector('.date-wrap')
let barWrap = document.querySelector('.bar-wrap')


getData()




async function getData(){
    const response = await fetch('data.json')
    const jssonArr = await response.json()

  


    jssonArr.forEach(element => {
        const bar = document.createElement('div')
        const day = document.createElement('div')
        const valueShow = document.createElement('div')

        day.classList.add('day')
        bar.classList.add('bar')
        valueShow.classList.add('valueSHow')

        valueShow.textContent = `${element.amount}`
        day.textContent = `${element.day}`

        bar.style.height = `${element.amount}%`
        barWrap.appendChild(bar)
        dateWrap.appendChild(day)
        bar.appendChild(valueShow)


       

        
        
    });
    
    const weekDayIndex = new Date().getDay() 
    const currentBar = barWrap.children[weekDayIndex - 1]
    currentBar.classList.add('current')
    currentBar.style.backgroundColor = '#75B4BE'
    
    
}


const weekDayIndex = new Date().getDay() 
