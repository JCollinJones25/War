
// object of a deck of cards
// object includes card rank, suit, and score
// method below taken from own work done earlier in 
// course on card game lab

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

let player1 = []
for (let i = 0; i < shuffledDeck.length / 2; i++) {
    // console.log(shuffledDeck[i])
    player1.push(shuffledDeck[i])
}

let player2 = []
for (let i = 26; i < shuffledDeck.length; i++) {
    player2.push(shuffledDeck[i])
}


// draw button
let $draw = $('.draw')
$draw.click(gamePlay)


// game play function
function gamePlay() {
    $('.facedown1').hide()
    $('.facedown2').hide()
    displayCards()
    sliceCards()
    // getScores()
    // compareScores()
}


let $faceup1 = $('.faceup1')
let $faceup2 = $('.faceup2')
let $score1 = $('#value1')
let $score2 = $('#value2')
// let addScore1 = score1.innerHTML
// let addScore2 = score2.innerHTML
// let score1Display = score1
// let score2Display = score2


function displayCards() {
    for (let i = 0; i < player1.length; i++) {
        $faceup1.text(`${player1[i].rank} ${player1[i].suit}`)
    }
    for (let i = 0; i < player2.length; i++) {
        $faceup2.text(`${player2[i].rank} ${player2[i].suit}`)
    }
}

//above function is displaying last card in array
// last cards pop
// therefore we need to iterate backwards through 
// the array to display scores

// scoreCount1 = 0
// scoreCount2 = 0

// DO I NEED THIS FUNCTION? (iterating backwards)
// function getScores() {
//     for (let i = player1.length - 1; i >= 0; i--) {
//         // console.log(player1score)
//     }
//     for (let i = player2.length - 1; i >= 0; i--) {
//         // console.log(player2score)
//     }
// }

//sclice(-1) is accessing last index
// store last index in variable
// shows card as array(0)
function sliceCards() {
    let player1score = player1.slice(-1)
    let player2score = player2.slice(-1)
    console.log(player1score[0].score)
    console.log(player2score[0].score)
}

// why doesnt below work?? 

// console.log(player1score.Cards[1])
// console.log(player2score.Cards[1])

// -----------OR-------------
// console.log(player1score.Cards[0][1])
// console.log(player2score.Cards[0][1])

function compareScores(){
    if (player1score[0].score > player2score[0].score) {
        $score1++
    } else if (player2score[0].score > player1score[0].score) {
        $score2++
    } else {
        return
    }
}




// next card button
let $nextCard = $('.nextCard')
$nextCard.click(nextCard)
discardPile1 = []
discardPile2 = []
function nextCard() {
    $('.facedown1').show()
    $('.facedown2').show()
    player1.pop()
    player2.pop()
}


// new game button
let $newGame = $('.newGame')
$newGame.click(newGame)
function newGame() {
    $('.facedown1').show()
    $('.facedown2').show()
    $score1.text('0')
    $score2.text('0')
    // ?? needs to get all cards back into player arrays ??
}


                // discard pile array -> push used cards
                // would need to set decks back up after new game button clicked
