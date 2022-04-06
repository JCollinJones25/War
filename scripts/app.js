// create an object of a deck of cards
// object includes card rank, suit, and score

class Cards {
    constructor(suit, rank, score){
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}
Cards.suit = ['hearts', 'spades', 'clubs', 'diamonds']
Cards.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
Cards.score = [2,3,4,5,6,7,8,9,10,11,12,13,14]
// console.log(Cards.suit)

const card1 = new Cards('spades', 'ace', 1)
// console.log(card1)

class Deck {
    constructor(length = 52){
        this.length = length
        this.cards = []
    }
    draw() {
        for(let i = 0; i < Cards.suit.length; i++){
            for(let j = 0; j < Cards.rank.length; j++){
                for(let k = 0; k < Cards.rank.length; k++){
                const newCard = new Cards(Cards.suit[i], Cards.rank[j], Cards.score[k])
                this.cards.push(newCard)
            }
            }
        }
    }
}


const deck1 = new Deck()
deck1.draw()


// console.log(Cards.suit)
// console.log(Cards.rank)
// console.log(Cards.score)
// console.log(Deck.cards)
// console.log(deck1)
