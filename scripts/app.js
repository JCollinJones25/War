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
console.log(deck1)

const shuffledDeck = deck1.cards.sort((a, b) => .5 - Math.random())
console.log(shuffledDeck)

// create a new deck based off deck class that is deck1 but shuffled
// const shuffledDeck = new Deck()
// function shuffle(){
//     const randomCard = deck1[Math.floor(Math.random() * i)]
//     deck1.splice(randomCard)
//     this.cards.push(randomCard)
    
// }
// shuffledDeck.draw()


// shuffle the deck and divide by two

// let shuffledDeck = []

// function shuffle() {
// }
//     for (let i = 0; i <= deck1.length; i++) {
//     }


// create a new array
// make a for loop that iterates over the length of the unshuffled array
// Get a random number up to the length of the array and round down
// Splice that random number out of your old array
// Push the spliced element to your new array
// Outside the loop, have the function return your new array