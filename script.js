const APIURL = 'https://api.github.com/users/'


const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')
const toggle = document.querySelector('.toggle')


toggle.addEventListener('click', (e) =>{
  const html = document.querySelector('html')
  if(html.classList.contains('darj')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'dark mode'

  }else{
    html.classList.add('dark')
    e.target.innerHTML='light mode'
  }
})

 





async function getUser(username) {
  try{
    const { data } = await  axios(APIURL + username)
    createUsercontainer(data)
    getRepos
  }
 catch(err){
   
   
 }
 
}

async function getRepos(username) {
  try{
    const { data } = await  axios(APIURL + username + '/repos')
    addReposToCard(data)
  }
 catch(err){
   createErrorCard('problem fetching repo')
   
 }
 
}




function createUsercontainer(user) {
  const containerHTML = `
  

  



  <div class="container">
      <div class="header" id="header">
        <div class="headerLeft" id="headerLeft">
           <a href="/" class="" title="Go to homepage"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
              viewBox="0 0 496 512" class="logo" height="32px" width="32px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg></a>
            <form class="user-form" id="form">
              <input class="header-input" id="search" placeholder="Search Username" />
            </form>
          
  
          <span class="header-span">Pull requests</span>
          <span class="header-span">Issues</span>
          <span class="header-span">Marketplace</span>
          <span class="header-span">Explore</span>
        </div>
  
        <div class="theme" title="Activate Dark Mode">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mode" height="20px"
            width="20px" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z">
            </path>
          </svg>
        </div>
      </div>
    </div>





  
    <div class="sticky">
      <div class="container">
        <div class="tab">
          <div class="left">
          </div>
          <nav class="right">
            <a href="/" class="active">  <svg viewBox="0 0 16 16" class="sc-citwmv kajamm">
              <path fill-rule="evenodd"
                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z">
              </path>
            </svg> Overview</a>
            <a href="/"><svg viewBox="0 0 16 16"
              class="sc-cBNfnY cHGPOa">
              <path fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
              </path>
            </svg> Repositories</a>
            <a href="/"> <svg viewBox="0 0 16 16"
              class="sc-jcVebW hrCIoP">
              <path fill-rule="evenodd"
                d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
              </path>
            </svg> Projects</a>
            <a href="/"> <svg viewBox="0 0 16 16"
              class="sc-bZSQDF eUgDnc">
              <path fill-rule="evenodd"
                d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z">
              </path>
            </svg> Packages</a>
          </nav>
        </div>
      </div>
      <div class="border"></div>
    </div>
  
  
  
  
  
  
  
    <div class="container">
      <div class="entity">
        <div class="left">
          <img src="${user.avatar_url}" alt="${user.name}">
          <h1>${user.name}</h1>
          <div>${user.bio}</div>
        <div>${user.followers} followers.  ${user.following} following
        ${public_gist} ${public_repos}
            </div> 
        </div>
  
  
  
        <div class="right"></div>
    
    
  
    
  
  
  `
  main.innerHTML = containerHTML
}


function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos
  .forEach(repo => {
     const repoEl = document.createElement
     ('a')
     repoEl.classList.add('repo')
     repoEl.href = repo.html_url
     repoEl.target = '_blank'
     repoEl.innerText =repo.name
     reposEl.appendChild(repoEl)


  
  })
  

}

form.addEventListener('submit', (e) =>{
  e.preventDefault()

  const user = search.value
if(user) {
  getUser(user)

  search.value = ''
}

})




 


