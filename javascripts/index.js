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
    <div class="container" id="page-template">
        <img class="responsive-img" src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png">
        <h2 class='home-template'> Your source of laughter <h2>
    </div>
    `
}



// const chuckJokeTemplate = () => {
//     let card = makeEl('li')
//     card.className = 'main-card'
//     card.innerHTML = `
//     <div class="row">
//     <div class="col s12 m7">
//       <div class="card">
//         <div class="card-image">
//           <img src="${joke.icon_url}">
//           <span class="card-title">Card Title</span>
//         </div>
//         <div class="card-content">
//           <p>${joke.value}</p>
//         </div>
//         <div class="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>
//   </div>    
//     `
//     document.querySelector('.container').appendChild(card)
// }


/** Renderers **/

const renderHomePage = () => {
    mainDiv().innerHTML = pageTemplate()
}

const renderChuckNorris = () => {
    mainDiv().innerHTML = ''
    const divContainer = makeEl('div')
    const chuckImg = makeEl('img')
    const smallMute = makeEl('small')
    const strongEl = makeEl('strong')
    const divBttnCont = makeEl('div')
    const bttn = makeEl('a')

    divContainer.className = 'container'
    divContainer.id = 'chuck-template'
    chuckImg.className = "responsive-img"
    chuckImg.src = "https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/chuck-norris.jpg"
    smallMute.className = "text-muted"
    strongEl.innerText = 'Chuck knows if you laugh'
    divBttnCont.className = 'button-container'
    bttn.href='#'
    bttn.className = "button"
    bttn.id = "generate"
    bttn.innerText = "Generate"
    
    divContainer.appendChild(chuckImg)
    divContainer.appendChild(smallMute)
    divContainer.appendChild(divBttnCont)

    smallMute.appendChild(strongEl)
    divBttnCont.appendChild(bttn)

    mainDiv().appendChild(divContainer)

    bttn.addEventListener('click', (e) => {
        e.preventDefault()
        loadJokes()
    })
}


const renderJoke = (joke) => {
    let card = makeEl('li')
    card.className = 'main-card'
    card.innerHTML = `
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${joke.icon_url}">
          <span class="card-title">Chuck is laughing</span>
        </div>
        <div class="card-content">
          <p>${joke.value}</p>
        </div>
        <div class="card-action">
          <a href="#" class="delete-bttn">Delete</a>
        </div>
      </div>
    </div>
  </div>    
    `
    document.querySelector('.joke-card').appendChild(card)
    document.querySelector('.delete-bttn').addEventListener('click', (e) => {
        e.preventDefault
        card.remove()
    })

    // // Create elements
    // const divRow = makeEl('div')
    // const divCol = makeEl('div')
    // const divCard = makeEl('div')
    // const divImg = makeEl('div')

    // // Create <img> + <span> elements for avatar
    // const imgAvatar = makeEl('img')
    // const cardTitle = makeEl('span')

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
}


//** Events */

const loadJokes = () => {
    fetch(mainUrl)
    .then(resp => resp.json())
    .then(jokeObj => renderJoke(jokeObj))
}

const chuckNorrisHomeLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault()
        renderChuckNorris()
    })
}
    

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage()
    chuckNorrisHomeLinkEvent()
    
})