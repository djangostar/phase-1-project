//** Global Variables **/
const mainUrl = 'https://api.chucknorris.io/jokes/random'

/** Dynamic functions **/
const makeEl = el => document.createElement(el);

/** Node getters **/
const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('home-page-link');
//const restartLink = () => document.getElementById('restart')

/** Template **/
const pageTemplate = () => {
    //console.log('testing')
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
    mainDiv().innerHTML = pageTemplate();
}

const renderChuckNorris = () => {
    mainDiv().innerHTML = '';
    const divContainer = makeEl('div');
    const chuckImg = makeEl('img');
    const smallMute = makeEl('small');
    const strongEl = makeEl('strong');
    const divBttnCont = makeEl('div');
    const bttn = makeEl('a');

    divContainer.className = 'container';
    divContainer.id = 'chuck-template';
    chuckImg.className = "responsive-img";
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

    //Started with literal

//     let card = makeEl('li')
//     card.className = 'main-card'
//     card.innerHTML = `
//     <div class="row">
//     <div class="col s12 m7">
//       <div class="card">
//         <div class="card-image">
//           <img src="${joke.icon_url}">
//           <span class="card-title">Chuck is laughing</span>
//         </div>
//         <div class="card-content">
//           <p>${joke.value}</p>
//         </div>
//         <div class="card-action">
//           <button href="#" class="delete-bttn">Delete</button>
//         </div>
//       </div>
//     </div>
//   </div>    
//     `
    
   
    // Create elements
    const card = makeEl('li')
    const divRow = makeEl('div')
    const divCol = makeEl('div')
    const divCard = makeEl('div')
    const divImg = makeEl('div')

    // Create <img> + <span> elements for avatar
    const imgAvatar = makeEl('img')
    const cardTitle = makeEl('span')

    // Create elements for the card content (joke)
    const cardContent = makeEl('div')
    const jokeTxt = makeEl('p')

    // Create elements for 'card action' (like button)
    const cardAction = makeEl('div')
    const delBttn = makeEl('button')
    
    // Add class attributes to elements
    card.classList.add('main-card')
    divRow.classList.add('row')
    divCol.classList.add('col-s12-m7')
    divCard.classList.add('card')
    divImg.classList.add('card-image')
    cardTitle.classList.add('card-title')
    cardContent.classList.add('card-content')
    jokeTxt.classList.add('center-align')
    cardAction.classList.add('card-action')
    delBttn.classList.add('delete-button')
    
    // Add id attributes to elements
    imgAvatar.id = 'avatar'
    jokeTxt.id = 'joke'
   

    // Add values to elements
    imgAvatar.src = joke.icon_url
    cardTitle.innerText = 'Litte Chuck'
    jokeTxt.innerText = joke.value
    delBttn.innerText = 'Delete!'

    // Append elements
    card.appendChild(divRow)
    card.appendChild(divCol)
    card.appendChild(divCard)
    card.appendChild(divImg)
    card.appendChild(cardContent)
    card.appendChild(cardAction)

    divImg.appendChild(imgAvatar)
    divImg.appendChild(cardTitle)
    cardContent.appendChild(jokeTxt)
    cardAction.appendChild(delBttn);
    
    document.querySelector('.joke-card').appendChild(card);

    //Delete joke
    document.querySelector('.delete-button').addEventListener('click', (e) => {
        e.preventDefault;
        card.remove();
    });
};

//** Events */

const loadJokes = () => {
    fetch(mainUrl)
    .then(resp => resp.json())
    .then(jokeObj => renderJoke(jokeObj))
}

//Renders the page for functionality

const chuckNorrisHomeLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderChuckNorris();
    })
}

//Reset Entire Page

const resetEvent = () => {
    document.getElementById('restart').addEventListener('click', (e) => {
        e.preventDefault();
        renderHomePage();
    })
}

//Added alert event with thanks

const credits = () => {
    document.getElementById('credits').addEventListener('click', () => {
       alert('Special thanks to: Natasha Koller, Shante Torres & Nancy Noyes for believing in me.')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    chuckNorrisHomeLinkEvent();
    resetEvent();
    credits();
})