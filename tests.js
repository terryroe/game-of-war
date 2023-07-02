const expect = chai.expect;
const assert = chai.assert;

describe('Determine the winner', () => {
  it('should return the winner', () => {
    const getWinner = (score1, score2) => {
      let message = '';
      // console.log('---------- Game Results ----------');

      // Output the winner or whether there was a tie.
      if (score1 > score2) {
        message = 'Player1 wins!';
      } else if (score1 < score2) {
        message = 'Player2 wins!';
      } else {
        message = 'We have a tie!';
      }

      // console.log(`\tPlayer1 scored: ${score1}`);
      // console.log(`\tPlayer2 scored: ${score2}`);
      return message;
    };

    expect(getWinner(12, 12)).to.equal('We have a tie!');
    expect(getWinner(13, 12)).to.equal('Player1 wins!');
    expect(getWinner(12, 13)).to.equal('Player2 wins!');
  });
});
