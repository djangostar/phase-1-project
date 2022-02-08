//** Global Variables **/
const mainUrl = 'https://api.chucknorris.io/jokes/random'

/** Dynamic functions **/
const makeEl = el => document.createElement(el)

/** Node getters **/
const mainDiv = () => document.getElementById('main')
const homePageLink = () => document.getElementById('home-page-link')
const restartLink = () => document.getElementById('restart')

/** Template **/
const pageTemplate = () => {
    return `
    <div class="container">
        <img class="responsive-img" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png">
        <h2 class='home-template'> Your source of laughter <h2>
    </div>
    `
    // const container = makeEl('div')
    // const img = makeEl('img')
    // const h2 = makeEl('h2')

    // container.className = "container"
    // img.className = 'responsive-img'
    // img.src = "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
    // h2.className = "home-template"
    // h2.innerText = 'Your Source of Laughter'

    // container.appendChild(img)
    // container.appendChild(h2)
}

const chuckNorrisTemplate = () => {
    return `
    <div class="container">
            <img class="responsive-img" src="https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/chuck-norris.jpg">
            <small class="text-muted"><strong>Chuck knows if you laugh</strong></small>
            <div class="button-container">
            <a class="waves-effect waves-light btn" id="generate">Generate</a>
            </div>
        </div>
    `
}



/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = pageTemplate()
}

const renderChuckNorris = () => {
    mainDiv().innerHTML = chuckNorrisTemplate()
}

const renderJoke = () => {
    return jokeTemplate()
}


// const renderJoke = (joke) => {
//     // Create elements
//     const divRow = makeEl('div')
//     const divCol = makeEl('div')
//     const divCard = makeEl('div')
//     const divImg = makeEl('div')

//     // Create <img> + <span> elements for avatar
//     const imgAvatar = makeEl('img')
//     const cardTitle = makeEl('span')

//     // Create elements for the card content (joke)
//     const cardContent = makeEl('div')
//     const jokeTxt = makeEl('p')

//     // Create elements for 'card action' (like button)
//     const cardAction = makeEl('div')
//     const likeBttn = makeEl('button')
    
//     // Add class attributes to elements
//     divRow.classList.add('row')
//     divCol.classList.add('col-s12-m7')
//     divCard.classList.add('card')
//     divImg.classList.add('card-image')
//     cardTitle.classList.add('card-title')
//     cardContent.classList.add('card-content')
//     jokeTxt.classList.add('center-align')
//     cardAction.classList.add('card-action')
    
//     // Add id attributes to elements
//     imgAvatar.id ='avatar'
//     jokeTxt.id = 'joke'
//     likeBttn.id = 'like-button'

//     // Add values to elements
//     imgAvatar.src = joke.icon_url
//     cardTitle.innerText = 'Litte Chuck'
//     jokeTxt.innerText = joke.value
//     likeBttn.innerText = 'Like!'

//     divImg.append(imgAvatar, cardTitle)
//     cardContent.append(jokeTxt)
//     cardAction.append(likeBttn)
//     divRow.append(divCol, divCard, divImg, cardContent, cardAction)
//     mainDiv().append(divRow)
//     console.log(mainDiv())
// }


//** Events */

const chuckNorrisHomeLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault()
        renderChuckNorris()
    })
}

const displayJoke = () => {
    document.getElementById('generate').addEventListener('click', (e) => {
        e.preventDefault()
        loadJoke()
    })
}

const loadJoke = () => {
    fetch(mainUrl)
    .then(resp => resp.json())
    .then(joke => {
        return `
        <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="${joke.icon_url}">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>${joke.value}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
        `
    })
}

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage()
    chuckNorrisHomeLinkEvent()
    displayJoke()
    
})