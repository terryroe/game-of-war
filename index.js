// A playing card representation; value of a card.
// Card values are 1 to 13 and aces are considered the highest value of 13.
class Card {
  constructor(value) {
    // Only accept numbers in the range of valid card values.
    if (typeof value !== 'number' || value < 1 || value > 13) {
      throw new Error(
        `A non-number or invalid value '${value}' was passed in.`
      );
    }

    this.value = value;
  }
}

// A deck of cards represented by an internal array.
class Deck {
  constructor() {
    this.cards = [];

    for (let suit = 1; suit <= 4; suit++) {
      for (let val = 1; val <= 13; val++) {
        this.cards.push(new Card(val));
      }
    }
  }

  // Remove a card from the deck and return it.
  getCard() {
    const cardIndex = Math.random() * this.cards.length;
    return this.cards.splice(cardIndex, 1)[0];
  }

  // Go through the deck (array) of cards giving each player a card in turn.
  deal(player1, player2) {
    while (this.cards.length > 0) {
      player1.addCard(this.getCard());
      player2.addCard(this.getCard());
    }
  }
}

// A player of the game has a card hand and a score.
class Player {
  constructor() {
    this.hand = [];
    this.score = 0;
  }

  // Build up the hand by adding cards to it one at a time.
  addCard(card) {
    this.hand.push(card);
  }

  // Remove a card from the end of the hand (array) and return it to be played.
  playCard() {
    return this.hand.pop();
  }

  // Increment the score by won because the player won a round.
  winHand() {
    this.score++;
  }
}

// Set up a new game, dealing out all the cards to the two players.
const deck = new Deck();
const player1 = new Player();
const player2 = new Player();
deck.deal(player1, player2);

// Keep track of the number of hands played.
let hand = 1;

// Only need to be concerned about the length of one hand because they'll both
// be playing a card each turn.
while (player1.hand.length > 0) {
  // Each player plays a card.
  const card1 = player1.playCard();
  const card2 = player2.playCard();
  let message = '';

  // Determine the winner of the hand, or whether there was a tie.
  if (card1.value > card2.value) {
    player1.winHand();
    message = 'Player1 Wins!';
  } else if (card1.value < card2.value) {
    player2.winHand();
    message = 'Player2 Wins!';
  } else {
    message = 'We have a tie!';
  }

  // Output the results of the hand just played.
  console.log(`Hand: ${hand}`);
  console.log(`\tPlayer1: ${card1.value}`);
  console.log(`\tPlayer2: ${card2.value}`);
  console.log(`\t\t`, message);

  // Move to the next hand.
  hand++;
}

// Determine the winner and output the results.
console.log('---------- Game Results ----------');

console.log(`Player1 scored: ${player1.score}`);
console.log(`Player2 scored: ${player2.score}`);

// Output the winner or whether there was a tie.
if (player1.score > player2.score) {
  console.log('Player1 wins!');
} else if (player1.score < player2.score) {
  console.log('Player2 wins!');
} else {
  console.log('We have a tie!');
}
