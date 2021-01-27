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




*/


$(document).ready(function() {
  
  $("form#form-player-one").submit(function(event) {
    event.preventDefault();
    $("#player-one").hide();
    $("#player-two").show();
  });
  $("form#form-player-two").submit(function(event) {
    event.preventDefault();
    $("#player-two").hide()
    $("#game").show();
  });
});