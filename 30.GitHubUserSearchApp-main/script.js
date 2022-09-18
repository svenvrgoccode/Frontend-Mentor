
const userContainer = document.querySelector('.user-wrap')
const searchbar = document.querySelector('.searchbar')
const mode = document.querySelector('.mode')

const input = document.querySelector('.inputUser')
const btn = document.querySelector('.searchButton')

const user = document.querySelector('.githubUser')
const login = document.querySelector('.githubUserName')
const joined = document.querySelector('.githubJoinedDate')
const repo = document.querySelector('.repoTotal')
const follower = document.querySelector('.followerTotal')
const following = document.querySelector('.followingTotal')
const locations = document.querySelector('.location')
const twit = document.querySelector('.twit')
const websites = document.querySelector('.websites')
const companies = document.querySelector('.companies')
const gitBio = document.querySelector('.bio')
const circle = document.querySelector('.circle')
const form = document.querySelector('.searchbar')


mode.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        mode.firstElementChild.textContent = 'light'
        mode.lastElementChild.src = 'assets/icon-sun.svg'
    
    }else{
        mode.firstElementChild.textContent = 'dark'
        mode.lastElementChild.src = 'assets/icon-moon.svg'
        userContainer.classList.add('shadow')
        searchbar.classList.add('shadow')

    }
    
})


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const url = `https://api.github.com/users/${input.value}`
    async function getUrl() {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const joinedCut = data.created_at.slice(0,10)


        circle.style.backgroundImage = `url("${data.avatar_url}")`
        user.textContent = data.name
        login.textContent = data.login
        joined.textContent = `Joined ${joinedCut} `
        repo.textContent = data.public_repos
        follower.textContent = data.followers
        following.textContent = data.following
        
        locations.textContent = 
        data.location === "" || data.location === null ? "No Location" : data.location

        twit.textContent = 
        data.twitter_username === "" || data.twitter_username === null ? "No Website" : data.twitter_username
        
        websites.textContent =
        data.blog === "" || data.blog === null ? "No Website" : data.blog


        companies.textContent =
        data.company === "" || data.company === null ? "No Company" : data.company

        gitBio.textContent =
        data.bio === "" || data.bio === null ?
        "This profile has no bio" : data.bio


    }
    getUrl()

})


