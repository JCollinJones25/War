# WAR - Project One

## War Overview

War is a simple card game where a single, standard deck of 52 cards is split in half and divided between two players. Both decks are face down and on each turn, both players flip the top card. The player with the highest card wins the round and gets to keep the losing players card(s) that were turned up. The player with the whole deck at the end wins. You can also play with a point system.

## Spefifc Rules

* How to win:
    -  The player who ends up with all the cards in the deck wins
        OR
    - players can play using a point system and first to a certain number wins
* If the players tie on a round, they turn over another card. If they tie again, they keep turning cards until there is a winner.
* Suits are ignored in War
* Aces are high!

## Pseudocode / Planning

* create an object of a deck of cards
    -  object includes card rank, suit, and score
* randomize the order of the deck (shuffle)
* divide the shuffled deck in half
* assign each player to a half
* have both decks sit on page in containers
* hide deck with image of back of card
* when button (or decks) are clicked, show top card
* cards are compared and winner of round is determined
* cards added to winners deck if playing biggest deck winning system OR points added to scoreboard if playing point system 
* for next round, cards transition away like slideshow and next card is either revealed or hiding behind back of card until clicked. 

## User Stories
* As a user:
- I want to draw the top card from my deck
- I want to see my score
- I want the previously flipped card to be discarded after turn is over
- I want next card to be face down before drawing it next

## Wireframing
![wireframe image](https://github.com/JCollinJones25/GA-proj-1-War/blob/main/proj-1-wireframe.png?raw=true)

## MVP
* Deck must be shuffled (randomized) at start of game (done)
* Players must each have a deck (done)
* Top card of deck should flip over when draw button is pressed (done)
* Top card needs to be discarded so it doesn't stay on top of deck (done)
* The value of the cards is compared (done)
* Player with the higher value card receives a point (done)
* Points are recorded for players (done)
* Winner is determined once certain score is reached (done)
* Score will stop recording after score limit (done)
* Draw button should not continue adding score if you keep clicking draw instead of getting new card (done)
* Draw button shouldn't be able to be clicked after one player wins (done)
* There needs to be higher stakes when there is a war condition - for point scoring system, tie breaker gets 2 points (done)

## Stretch Goals
* As the game stands, the cards are popped/discarded out of the deck. Cards need to be put back into array (deck) when new game button is clicked. (done)
* deck1 and deck2 divs can be image of back of card (done)
* Include 'cards remaining:' display next to decks. (done)
* front of card should be just number and words saying suit (done)
* Display text "War!" if there is a tie (done)
* front of card is image of suit (done)
* display text when player wins a tie breaker
* Instead of having a 'next card' button, draw starts a timer and the table resets after the cards are revealed
* give cards flip effect in css
* make the game where every time player wins another scoreboard keeps track of total wins so players can play best of 3 or multiple rounds.
* Change point system to classic war scoring system. Winner of a hand gets losers cards.