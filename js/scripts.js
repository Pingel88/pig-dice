/*
Math.floor()
Math.random()
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

2 players
2 buttons
2 scores
field for player 1, enters name, clicking add hides field and button, shows field for player 2
field for player 2 enters name, click add hides player 2 field and button, show game

each player could be an object?

player1 {
  name: Mike
  die: 6
  totalscore: 25
}

button to roll the die button to hold

turn = playerOne

pointsTurn = 0

when roll is clicked: 
if 2-6, the result is added to the pointsTurn variable
if 1, the turn is ended and pointsTurn is reset to 0, turn = playerTwo

when hold is clicked:
store pointsTurn add to player object score
ends turn, turn = playerTwo

game is over is when a player reaches 100 in player object score
*/

function Player(name) {
  this.name = name;
  this.score = 0;
}

playerOne = new Player("Mike");
console.log(playerOne);

// $(document).ready(function() {
  
//   $("form#form-player-one").submit(function(event) {
//     event.preventDefault();
//     $("#player-one").hide();
//     $("#player-two").show();
//   });
//   $("form#form-player-two").submit(function(event) {
//     event.preventDefault();
//     $("#player-two").hide()
//     $("#game").show();
//   });

  
// });
