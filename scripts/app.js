
// create an object of a deck of cards
// object includes card rank, suit, and score
// method below taken from own work done earlier in course on card game lab

class Cards {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}
Cards.suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
Cards.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
Cards.score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

class Deck {
    constructor(length = 52) {
        this.length = length
        this.cards = []
    }
    draw() {
        for (let i = 0; i < Cards.suit.length; i++) {
            for (let j = 0; j < Cards.rank.length; j++) {
                const newCard = new Cards(Cards.suit[i], Cards.rank[j], Cards.score[j])
                this.cards.push(newCard)
            }
        }
    }
}
const deck1 = new Deck()
deck1.draw()

// shuffle the deck and divide by two
// custom sort method found on DEV
const shuffledDeck = deck1.cards.sort((a, b) => .5 - Math.random())


// divide shuffled deck between deck1 and deck2
// use for loop to assign cards from shuffled deck to arrays of players decks
// deck1 = shuffledDeck[0 - 25]
// deck2 = shuffledDeck[26 - 52]

let player1 = []
for (let i = 0; i < shuffledDeck.length / 2; i++) {
    // console.log(shuffledDeck[i])
    player1.push(shuffledDeck[i])
}
console.log(player1)

let player2 = []
for (let i = 26; i < shuffledDeck.length; i++) {
    player2.push(shuffledDeck[i])
}
console.log(player2)


// draw button
let $draw = $('.draw')
$draw.click(gamePlay)


// game play function
function gamePlay() {
    $('.facedown1').hide()
    $('.facedown2').hide()
    displayCards()
}


// function displayPlayer1() {
// }


let $faceup1 = $('.faceup1')
let $faceup2 = $('.faceup2')
let $score1 = $('.value1')
let $score2 = $('.value2')
// parseInt($score1.innerHTML)
// parseInt($score2.innerHTML)
// let addScore1 = $score1.innerHTML
// let addScore2 = $score2.innerHTML

function displayCards(event) {
    for (let i = 0; i < player1.length; i++) {
        $faceup1.text(`${player1[i].rank} ${player1[i].suit}`)

        if (player1[i].score > player2[i].score) {
            $score1.text(+1)
        } else if (player2[i].score > player1[i].score) {
            $score2.text(+1)
        }
    }
    for (let i = 0; i < player2.length; i++) {
        $faceup2.text(`${player2[i].rank} ${player2[i].suit}`)
        
        // discardPile2.push(player2[i])
        // if (player2[i].score > player1[i].score) {
        //     $score2.text(+1)
        // }
    }
}


// score 
// compare cards
// function addPoint() {
// }


// next card button
let $nextCard = $('.nextCard')
$nextCard.click(nextCard)
discardPile1 = []
discardPile2 = []
function nextCard() {
    $('.facedown1').show()
    $('.facedown2').show()
    for (let j = 0; j < player1.length; j++) {
        $faceup1.text(`${player1[j].rank} ${player1[j].suit}`)
    }
    for (let j = 0; j < player2.length; j++) {
        $faceup2.text(`${player2[j].rank} ${player2[j].suit}`)
    }
}


    // new game button
    let $newGame = $('.newGame')
    $newGame.click(newGame)
    function newGame() {
        $('.facedown1').show()
        $('.facedown2').show()
        $score1.text('0')
        $score2.text('0')

    }




// discard pile array -> push used cards
// would need to set decks back up after new game button clicked
