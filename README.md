# Game of War

## Assignment Requirements

### **Coding Steps:**

- For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
  - You do not need to do anything special when there is a tie in a round.
- Think about how you would build this project and write your plan down. Consider classes such as: **Card**, **Deck**, **Player**, as well as what **properties** and **methods** they may include.
  - You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

### **The completed project should, when executed, do the following:**

- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point.
  - Ties result in zero points for both Players.
- After all cards have been played, display the score and declare the winner.
- Write a Unit Test using Mocha and Chai for at least one of the functions you write.

## Textual Description

Two players and one deck of cards. The cards are dealt so each player has 26 cards. Each player pulls one card from the top of their pile and plays it. The highest card value wins and the player gets a point. This continues through all the cards until they have all been played. At the end, the one with the most points wins.

The plays are logged to the console showing who won each round. At the end, the final scores are displayed and the winner is determined and shown.

## Screenshot(s)
<img width="1253" alt="Screen Shot 2023-07-02 at 1 29 20 PM" src="https://github.com/terryroe/game-of-war/assets/59881/d6503048-a74b-4ca0-bdf1-b8214480187e">
