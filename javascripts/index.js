//** Global Variables **/
const mainUrl = 'https://api.chucknorris.io/jokes/random'

/** Dynamic functions **/
const makeEl = el => document.createElement(el)

/** Node getters **/
const mainDiv = () => document.getElementById('main')

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
                <button class="generate">Generate</button>
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



const loadJoke = () => {
    fetch(mainUrl)
    .then(res => res.json())
    .then(joke => joke)
}

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage()
})