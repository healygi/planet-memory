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

//defining grid in js
const grid = document.querySelector('.grid')
var cardsSelect = []
var cardsSelectId = []


//create your board and loop over array
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'assets/css/images/card.jpg')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

//check for matches



//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsSelect.push(cardArray[cardId].name)
    cardsSelectId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
}

})