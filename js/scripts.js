function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function Game() {
  this.turn = undefined;
  this.currentAction = undefined;
  this.roll = undefined
}
Game.prototype.setRoll = function(arg){
  this.roll = arg
}
Game.prototype.setTurn = function(arg){
  this.turn = arg
}
Game.prototype.setAction = function(arg) {
  this.currentAction = arg
}
function Player(name) {
  this.name = name;
  this.score = 0;
  this.totalScore = 0;
}
Player.prototype.addPoints = function(param){
  this.score += param
}
Player.prototype.removePoints = function() {
  this.score = 0
}
Player.prototype.addTotalPoints = function() {
  this.totalScore = this.score + this.totalScore
}
function pig(P1, P2, game) {
  if (game.turn === undefined){
    const firstInt = getRandomInt(100);
    if (firstInt > 50) {
      game.setTurn(P1.name)
    }
    else {
      game.setTurn(P2.name)
    }
  }
  if (game.currentAction === 'turn') {
    turn()
  } else if (game.currentAction === 'roll') {
    roll()
  }
  function turn() {
    if (game.turn === P1.name) {
      P1.addTotalPoints()
      P1.removePoints()
      game.setTurn(P2.name)
    } else if (game.turn === P2.name) {
      P2.addTotalPoints()
      P2.removePoints()
      game.setTurn(P1.name)
    }; 
  }
  function roll() {
    let randomInt = getRandomInt(6);
    game.setRoll(randomInt)
    if (randomInt === 1) {
      if (game.turn === P1.name) {
        P1.removePoints()
        game.setTurn(P2.name)
      } else if (game.turn === P2.name) {
        P2.removePoints()
        game.setTurn(P1.name)
      };
    } else {
      if (game.turn === P1.name) {
        if (P1.score + randomInt + P1.totalScore >= 100) {
          displayWinner(P1.name);
        } else {
          P1.addPoints(randomInt)
        }
      } else if (game.turn === P2.name) {
        if (P2.score + randomInt + P2.totalScore >= 100) {
          displayWinner(P2.name);
        } else {
          P2.addPoints(randomInt)
        }
      };
    };
  };
};
function displayWinner(winner){
  $("#game-buttons").hide();
  $("#winner").show();
  $("#player-winner").html(winner);
};
function displayRoll(roll, P1, P2){
  let max = Math.max(P1.score, P2.score);
  $("#dice-roll").html(roll);
  $("#dice-roll-total").html(max);
};
function displayTotal(P1, P2) {
  $("#player-one-total").html(P1.totalScore);
  $("#player-two-total").html(P2.totalScore);
};
$(document).ready(function() {
  let pigGame = new Game()
  let playerOne;
  let playerTwo;
  $("form#form-player-one").submit(function(event) {
    event.preventDefault();
    playerOne = new Player($("input#player-one-input").val());
    $("#player-one").hide();
    $("#player-two").show();
  });
  $("form#form-player-two").submit(function(event) {
    event.preventDefault();
    playerTwo = new Player($("input#player-two-input").val());
    $("#player-two").hide();
    $("#game").show();
    pig(playerOne, playerTwo, pigGame);
  });
  $('#next-turn').click(function(event) {
    event.preventDefault()
    pigGame.setAction('turn')
    pig(playerOne, playerTwo, pigGame)
    displayTotal(playerOne, playerTwo)
  });
  $('#roll').click(function(event) {
    event.preventDefault()
    pigGame.setAction('roll')
    pig(playerOne, playerTwo, pigGame)
    displayRoll(pigGame.roll, playerOne, playerTwo)
  });
});