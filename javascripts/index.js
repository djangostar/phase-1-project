//** Global Variables **/

const mainUrl = 'https://api.chucknorris.io/jokes/random'
let jokeArr = []

/** Dynamic functions **/
const makeEl = el => document.createElement(el)

/** Node getters **/
const mainDiv = () => document.getElementById('main')

const loadJoke = () => {
    fetch(mainUrl)
    .then(res => res.json())
    .then(joke => joke)
}

const renderJoke = (joke) => {
    //Make a card
    const divRow = makeEl('div')
    divRow.classList.add('row')
    mainDiv().appendChild(divRow)
    const divCol = makeEl('div')
    divCol.classList.add('col s12 m7')
    divRow.appendChild(divCol)
    const divCard = makeEl('div')
    divCard.classList.add('card')
    divCol.appendChild(divCard)
    
    // Chuck Avatar
    const divImg = makeEl('div')
    divImg.classList.add('card-image')
    const imgAvatar = makeEl('img')
    imgAvatar.id ='avatar'
    imgAvatar.src = joke.icon_url
    divImg.appendChild(imgAvatar)
    const cardTitle = makeEl('span')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = 'Litte Chuck'
    divImg.appendChild(cardTitle)
    
    // Div for the card content

    const cardContent = makeEl('div')
    cardContent.classList.add('card-content')
    divCard.appendChild(cardContent)
    // The actual joke
    const jokeTxt = makeEl('p')
    jokeTxt.classList.add('center-align')
    jokeTxt.id = 'joke'
    jokeTxt.innerText = joke.value
    cardContent.appendChild(jokeTxt)
    
    // Like Button
    const cardAction = makeEl('div')
    cardAction.classList.add('card-action')
    divCard.appendChild(cardAction)
    const likeBttn = makeEl('button')
    likeBttn.id = 'like-button'
    likeBttn.innerText = 'Like!'
    cardAction.appendChild(likeBttn)

}

console.log(renderJoke())
document.addEventListener('DOMContentLoaded', () => {
    loadJoke()
})