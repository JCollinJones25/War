
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
Cards.suit = ['hearts', 'spades', 'clubs', 'diamonds']
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
// console.log(deck1)

// shuffle the deck and divide by two
// custom sort method found on DEV
const shuffledDeck = deck1.cards.sort((a, b) => .5 - Math.random())
// console.log(shuffledDeck)


// Fisher-Yates Algorithm found on DEV
// const shuffledDeck = array => {
//     for (let i = deck1.cards.length - 1; i > 0; i--){
//         const j = Math.floor(Math.random() * (i + 1))
//         const temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
// }
// console.log(shuffledDeck)



// create a new array
// make a for loop that iterates over the length of the unshuffled array
// Get a random number up to the length of the array and round down
// Splice that random number out of your old array
// Push the spliced element to your new array
// Outside the loop, have the function return your new array


// divide shuffled deck between deck1 and deck2
// use for loop to assign cards from shuffled deck to arrays of players decks
// deck1 = shuffledDeck[0 - 25]
// deck2 = shuffledDeck[26 - 52]

// let player1 = shuffledDeck[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let player1 = []
for (let i = 0; i < shuffledDeck.length / 2; i++) {
    // console.log(shuffledDeck[i])
    player1.push(shuffledDeck[i])
}
console.log(player1)

// let player2 = shuffledDeck[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
//     39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
let player2 = []
for (let i = 26; i < shuffledDeck.length; i++) {
    player2.push(shuffledDeck[i])
}
console.log(player2)


// draw button
let $draw = $('.draw')
$draw.click(gamePlay)

// game play function
// in gameplay function
//hide images
//change text of div = player card
function gamePlay() {
    $('.facedown1').hide()
    $('.facedown2').hide()

    // ="url('https://opengameart.org/sites/default/files/card%20back%20red.png').style.display = 'none'"
}



// deck1.text() = deck 1 shuffledDeck.rank





// deck2.text() = deck 2 shuffledDeck.rank