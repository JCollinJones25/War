
// class of cards and class of deck
// cards includes rank, suit, and score
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

let player1, player2

function reDeal() {
    const deck1 = new Deck()
    deck1.draw()

    // shuffle the deck and divide by two
    // custom sort method found on DEV
    const shuffledDeck = deck1.cards.sort((a, b) => .5 - Math.random())

    player1 = []
    for (let i = 0; i < shuffledDeck.length / 2; i++) {
        // console.log(shuffledDeck[i])
        player1.push(shuffledDeck[i])
    }

    player2 = []
    for (let i = 26; i < shuffledDeck.length; i++) {
        player2.push(shuffledDeck[i])
    }

}
reDeal()


//global variables
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
let $nextCard = $('.nextCard')
let $newGame = $('.newGame')
gameIsOver = false
isClicked = true
isATie = false
let $cardsRemaining1 = $('.cardsRemaining1')
let $cardsRemaining2 = $('.cardsRemaining2')


// draw button
$draw.click(gamePlay)


// game play function
function gamePlay() {
    if (isClicked === true) {
        $('.facedown1').hide()
        $('.facedown2').hide()
        displayCards()
        compareScores()
        gameOver()
        gameIsOver
    }
    isClicked = false
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


//display cards remaining function
function cardsRemaining() {
    $cardsRemaining1.text(`Cards Remaining: ${player1.length}`)
    $cardsRemaining2.text(`Cards Remaining: ${player2.length}`)
}
cardsRemaining()


// compare scores function
//sclice(-1) is accessing last index
// store last index in variable
function compareScores() {
    let player1score = player1.slice(-1)
    let player2score = player2.slice(-1)
    if (isATie === false && player1score[0].score > player2score[0].score && scoreCount1 < 10 && scoreCount2 !== 10) {
        isATie = false
        scoreCount1 += 1
        $score1.text(`${scoreCount1}`)
        console.log(`war? ${isATie}`)
        return
    } else if (isATie === false && player2score[0].score > player1score[0].score && scoreCount2 < 10 && scoreCount1 !== 10) {
        isATie = false
        scoreCount2 += 1
        $score2.text(`${scoreCount2}`)
        console.log(`war? ${isATie}`)
        return
    } else if (player2score[0].score === player1score[0].score) {
        $tie.show()
        isATie = true
        console.log(`war? ${isATie}`)
        console.log(`Card1 Value: ${player1score[0].score}`)
        console.log(`Card2 Value: ${player2score[0].score}`)
        console.log(`Player 1 Score: ${scoreCount1}`)
        console.log(`Player 2 Score: ${scoreCount2}`)
        return
    } else if (isATie === true && player1score[0].score > player2score[0].score && scoreCount1 < 10 && scoreCount2 !== 10) {
        isATie = false
        scoreCount1 += 2
        $score1.text(`${scoreCount1}`)
        console.log(`war? ${isATie}`)
        console.log('Player 1 got an extra point!')
        return
    } else if (isATie === true && player2score[0].score > player1score[0].score && scoreCount2 < 10 && scoreCount1 !== 10) {
        isATie = false
        scoreCount2 += 2
        $score2.text(`${scoreCount2}`)
        console.log(`war? ${isATie}`)
        console.log('Player 2 got an extra point!')
        return
    } else {
        console.log('not adding score')
    }
}


// gameover function
function gameOver() {
    if (scoreCount1 >= 10) {
        $player1wins.show()
        gameIsOver = true
        console.log('Game Over - Press `New Game`')
    } else if (scoreCount2 >= 10) {
        $player2wins.show()
        gameIsOver = true
        console.log('Game Over - Press `New Game`')
    } else {
        console.log('Game in progress')
    }
}


// next card button
$nextCard.click(nextCard)
function nextCard() {
    if (isClicked === false) {
        $('.facedown1').show()
        $('.facedown2').show()
        $tie.hide()
        if (gameIsOver === true) {
            return
        }
        player1.pop()
        player2.pop()
        cardsRemaining()
    }
    isClicked = true
}


// new game button
$newGame.click(newGame)
function newGame() {
    $('.facedown1').show()
    $('.facedown2').show()
    $tie.hide()
    $player1wins.hide()
    $player2wins.hide()
    $score1.text(0)
    $score2.text(0)
    scoreCount1 = 0
    scoreCount2 = 0
    isClicked = true
    gameIsOver = false
    reDeal()
    cardsRemaining()
}

