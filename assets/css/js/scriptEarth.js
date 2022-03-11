document.addEventListener('DOMContentLoaded', () => {
    //card options

    const cardArray = [{
            name: 'lake',
            img: 'assets/css/images/lake.jpg'
        },
        {
            name: 'lake',
            img: 'assets/css/images/lake.jpg'
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
            name: 'whale',
            img: 'assets/css/images/whale.jpg'
        },
        {
            name: 'whale',
            img: 'assets/css/images/whale.jpg'
        },
        {
            name: 'mountains',
            img: 'assets/css/images/mountains.jpg'
        },
        {
            name: 'mountains',
            img: 'assets/css/images/mountains.jpg'
        },
        {
            name: 'plant',
            img: 'assets/css/images/plant.jpg'
        },
        {
            name: 'plant',
            img: 'assets/css/images/plant.jpg'
        },
        {
            name: 'volcano',
            img: 'assets/css/images/volcano.jpg'
        },
        {
            name: 'volcano',
            img: 'assets/css/images/volcano.jpg'
        }
    ]

    //randomise my card array

    cardArray.sort(() => 0.5 - Math.random())


    //defining grid in js
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //create board and loop over array
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/css/images/card.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()

    //check for matches and ensure card can't be clicked twice
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            alert('You found a pair!')
            cards[optionOneId].setAttribute('src', 'assets/css/images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'assets/css/images/blank.jpg')
            cards[optionOneId].removeEventListener("click", flipCard); //remove event listner so user can't click card again
            cards[optionTwoId].removeEventListener("click", flipCard);
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
        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!')
            location.reload(); //reloads game
        }
    }
    //flip your card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        //create if statement to check if cards match, set timer 500mill-second

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }



    //set function for timer 

    //function timeHandler() {
    // alert("Hey! Time is running out! Get matching!");
    //}
    //if (flipCard > 2)
    //setTimeout(timeHandler, 500);

})