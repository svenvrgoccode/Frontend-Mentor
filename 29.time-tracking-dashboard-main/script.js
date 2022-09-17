const data = 
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


const currentTime = document.querySelectorAll('.current') 
const previous = document.querySelectorAll('.previous')
const buttons = document.querySelectorAll('.btn')
const cardContainer = document.querySelector('.container-cards')

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        activateClickedButton(button)
        const clickedOption = button.dataset.option
        renderCards(clickedOption)
    })
})

// REMOVE ACTIVE FROM BUTTON*******

const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
}


// CLEAR ACTIVITIES *******


const clearActivites = () => {
    const activites = document.querySelectorAll('.activity-tracker')
    activites.forEach(a => a.remove())

}

const renderCards = (clickedOption) => {
    clearActivites()

    const calcTimeframe = (option) => {
        if(option === 'daily'){
            return true
        }else if(option === 'weekly'){
            return true
        }else if(option === 'monthly'){
            return true
        }
    }
    
    data.forEach(activity =>{
        const name = activity.title
        const activityClass = name.toLowerCase().replace(' ','-')
        const timeframeData = activity.timeframes[clickedOption]  
        const previousTimeframe = calcTimeframe(clickedOption)
        const card = document.createElement('div')
        console.log(previousTimeframe)
        card.classList.add('activity-tracker',activityClass)
        const stringToInject = `
        <div class="card ${activityClass}">
          <div class="color">
            <img src="images/icon-${activityClass}.svg" alt="">
          </div>
          <div class="${activityClass}-wrap wrap">
            <p>${activityClass}</p>
            <img src="images/icon-ellipsis.svg" alt="">
          </div>
          <p data-activity="${activityClass}" class="${activityClass}-hours current hours">${timeframeData.current} Hrs</p>
          <p class="previus">Last Week - 36hrs</p>
        </div>
        `
        card.innerHTML = stringToInject
        cardContainer.appendChild(card)

    })
}








buttons[1].click()





