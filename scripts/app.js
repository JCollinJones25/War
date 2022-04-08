
// class of cards and class of deck
// cards includes card rank, suit, and score
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


// global variables
let player1 = []
for (let i = 0; i < shuffledDeck.length / 2; i++) {
    // console.log(shuffledDeck[i])
    player1.push(shuffledDeck[i])
}

let player2 = []
for (let i = 26; i < shuffledDeck.length; i++) {
    player2.push(shuffledDeck[i])
}

let $draw = $('.draw')
let $faceup1 = $('.faceup1')
let $faceup2 = $('.faceup2')
let $tie = $('.tie')
let $player1wins = $('.player1wins')
let $player2wins = $('.player2wins')
let $score1 = $('#value1')
let $score2 = $('#value2')
scoreCount1 = 0
scoreCount2 = 0
discardPile1 = player1.pop()
discardPile2 = player2.pop()
let $nextCard = $('.nextCard')
let $newGame = $('.newGame')
gameIsOver = false


// draw button
$draw.click(gamePlay)


// game play function
function gamePlay() {
    $('.facedown1').hide()
    $('.facedown2').hide()
    displayCards()
    compareScores()
    gameOver()
    gameIsOver
    // storeDeck1()
    // storeDeck2()
}

// display cards function
function displayCards() {
    for (let i = 0; i < player1.length; i++) {
        $faceup1.text(`${player1[i].rank} of ${player1[i].suit}`)
    }
    for (let i = 0; i < player2.length; i++) {
        $faceup2.text(`${player2[i].rank} of ${player2[i].suit}`)
    }
}


// compare scores function
//sclice(-1) is accessing last index
// store last index in variable
function compareScores() {
    let player1score = player1.slice(-1)
    let player2score = player2.slice(-1)
    if (player1score[0].score > player2score[0].score && scoreCount1 < 10 && scoreCount2 !== 10) {
        scoreCount1 += 1
        $score1.text(`${scoreCount1}`)
    } else if (player2score[0].score > player1score[0].score && scoreCount2 < 10 && scoreCount1 !== 10) {
        scoreCount2 += 1
        $score2.text(`${scoreCount2}`)
    } else if (player2score[0].score === player1score[0].score) {
        $tie.show()
    } else {
        console.log('not adding score')
    }
    console.log(`Card1 Value: ${player1score[0].score}`)
    console.log(`Card2 Value: ${player2score[0].score}`)
    console.log(`Player 1 Score: ${scoreCount1}`)
    console.log(`Player 2 Score: ${scoreCount2}`)
}


// gameover function
function gameOver() {
    if (scoreCount1 === 10) {
        $player1wins.show()
        gameIsOver === true
    } else if (scoreCount2 === 10) {
        $player2wins.show()
        gameIsOver === true
    } else {
        console.log('Game in progress')
    }
}


// next card button
$nextCard.click(nextCard)
function nextCard() {
    $('.facedown1').show()
    $('.facedown2').show()
    player1.pop()
    player2.pop()
    $tie.hide()
    $player1wins.hide()
    $player2wins.hide()
    if (gameIsOver === true){
        return
    }
}


// new game button
$newGame.click(newGame)
function newGame() {
    $('.facedown1').show()
    $('.facedown2').show()
    // player1.pop()
    // player2.pop()
    $tie.hide()
    $player1wins.hide()
    $player2wins.hide()
    $score1.text(0)
    $score2.text(0)
    scoreCount1 = 0
    scoreCount2 = 0
    // gameIsOver
    // ?? needs to get all cards back into player arrays ??
}


// discard pile array -> push used cards
// would need to set decks back up after new game button clicked


console.log(discardPile1)
// function storeDeck1(){
//     for (let i =  player1.length -1; i >= 0; i--){
//         discardPile1.push(player1)
//     }
// }
// function storeDeck2(){
//     for (let i =  player2.length -1; i >= 0; i--){
//         discardPile2.push(player2)
//     }
// }