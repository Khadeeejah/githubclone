const APIURL = 'https://api.github.com/users/'
const api = axios.create({
    baseURL: "https://api.github.com"
  });
  

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserContainer(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToContainer(data)
    } catch(err) {
        createErrorContainer('Problem fetching repos')
    }
}

function createUserContainer(user) {
    const containerHTML = `
  <div class="entity">
         <div class="left">
          <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
          <h1>${user.name}</h1>
          <div class="text">${user.bio}<</div>
          <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
          
        </div> 
</div>


    `
    main.innerHTML = containerHTML
    
}

function createErrorContainer(msg) {
    const containerHTML = `
        <div class="container">
            <h1>${msg}</h1>
        </div>

        <div class="right " id="repos">
        <div class="grid-container">
          
          <div class="grid-item">
            <div class="repo"> emailtemplate1</div>

            <div> ${repos_url}</div>
          </div>
          <div class="grid-item">
            <div class="repo">emailtemplate2</div>

            <div>html</div>
          </div>
          <div class="grid-item">
            <div class="repo"> emailtemplate3</div>

            <div> html</div>
          </div>
          <div class="grid-item">
            <div class="repo"> onboardly</div>

            <div>html</div>
          </div>
          <div class="grid-item">
            <div class="repo"> reviewpage</div>
            <div> html</div>
          </div>
        </div>
      </div>

    </div>
  </div> 


    `

    main.innerHTML = containerHTML
}

function addReposToContainer(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repos')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})

