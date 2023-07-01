// A playing card representation; value and suit of a card.
class Card {
  constructor(suit, value) {
    if (typeof value !== 'number' || value < 1 || value > 13) {
      throw new Error(
        `A non-number or invalid value '${value}' was passed in.`
      );
      return;
    }

    this.value = value;
    this.suit = suit;
  }
}

// A deck of cards represented by an internal array and a method to get a card.
class Deck {
  constructor() {
    this.cards = [];

    for (let suit = 1; suit <= 4; suit++) {
      for (let val = 1; val <= 13; val++) {
        this.cards.push(new Card(suit, val));
      }
    }
  }

  // Remove a card from the deck and return it.
  getCard() {
    const cardIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(cardIndex, 1)[0];
  }
}

// Test code below
const deck = new Deck();
while (deck.cards.length > 0) {
  const card = deck.getCard();
  console.log(card.suit, card.value);
}
