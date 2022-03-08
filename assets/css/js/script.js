document.addEventListener('DOMContentLoaded', () => {
//card options

const cardArray = [
{
    name: 'asteroid',
    img: 'assets/css/images/asteroid.jpg'
},
{
    name: 'asteroid',
    img: 'assets/css/images/asteroid.jpg'
},
{
    name: 'earth',
    img: 'assets/css/images/earth.jpg'
},
{
    name: 'earth',
    img: 'assets/css/images/earth.jpg'
},
{
    name: 'galaxy',
    img:'assets/css/images/galaxy.jpg'
},
{
    name: 'galaxy',
    img:'assets/css/images/galaxy.jpg'
},
{
    name: 'moon',
    img:'assets/css/images/moon.jpg'
},
{
    name: 'moon',
    img:'assets/css/images/moon.jpg'
},
{
    name: 'nasa',
    img:'assets/css/images/nasa.jpg'
},
{
    name: 'nasa',
    img:'assets/css/images/nasa.jpg'
},
{
    name: 'planet',
    img:'assets/css/images/planet.jpg'
},
{
    name: 'planet',
    img:'assets/css/images/planet.jpg'
}
]

cardArray.sort(() => 0.5 - Math.random())


//defining grid in js
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []


//create your board and loop over array
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/css/images/card.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a pair!')
        cards[optionOneId].setAttribute('src', 'assets/css/images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/css/images/blank.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/css/images/card.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/css/images/card.jpg')
   
        alert('Oops, try again!')
}
    //either way- flip cards again
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }
}
//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    //create if statement so the user selects a pair, set timer 500mill-second

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

})