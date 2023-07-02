// A playing card representation.
// Card values are 1 to 13.
// Aces are considered the highest value of 13.
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
    // Splice returns an array of removed items. We're only removing one item so
    // get the first (0th) item (Card) from the returned array and return it.
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

// A player of the game has a card stack and a score.
class Player {
  constructor() {
    this.stack = [];
    this.score = 0;
  }

  // Build up the stack by adding cards to it one at a time.
  addCard(card) {
    this.stack.push(card);
  }

  // Remove a card from the top of the stack (array) and return it to be played.
  playCard() {
    return this.stack.pop();
  }

  // Increment the score by one because the player won a round.
  winRound() {
    this.score++;
  }
}

// Deal out all the cards to the two players.
const dealCards = (player1, player2) => {
  const deck = new Deck();
  deck.deal(player1, player2);
};

// Each player plays a card.
const playRound = (player1, player2) => {
  const card1 = player1.playCard();
  const card2 = player2.playCard();
  let message = '';

  // Determine the winner of the round, or whether there was a tie.
  if (card1.value > card2.value) {
    player1.winRound();
    message = 'Player1 Wins!';
  } else if (card1.value < card2.value) {
    player2.winRound();
    message = 'Player2 Wins!';
  } else {
    message = 'We have a tie!';
  }

  // Output the results of the hand just played.
  console.log(`Player1: ${card1.value}`);
  console.log(`Player2: ${card2.value}`);
  console.log(`\t`, message);
};

// Determine the winner and output the results.
const getWinner = (score1, score2) => {
  let message = '';
  console.log('---------- Game Results ----------');

  // Output the winner or whether there was a tie.
  if (score1 > score2) {
    message = 'Player1 wins!';
  } else if (score1 < score2) {
    message = 'Player2 wins!';
  } else {
    message = 'We have a tie!';
  }

  console.log(`\tPlayer1 scored: ${score1}`);
  console.log(`\tPlayer2 scored: ${score2}`);
  return message;
};

// Run the game
const player1 = new Player();
const player2 = new Player();

// Deal the cards to the players
dealCards(player1, player2);

// Only need to be concerned about the length of one stack because they'll both
// be playing a card each turn.
while (player1.stack.length > 0) {
  playRound(player1, player2);
}

const winner = getWinner(player1.score, player2.score);
console.log(winner);
