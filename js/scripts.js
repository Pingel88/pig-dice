function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function Player(name) {
  this.name = name;
  this.score = 0;
  this.totalScore = 0;
}
// prototype is made here and takes an argument for accumulation.
Player.prototype.addPoints = function(param){
  this.score += param
  diceRoll(param);
  console.log(param);
}
Player.prototype.removePoints = function() {
  this.score = 0
}
Player.prototype.addTotalPoints = function() {
  this.totalScore = this.score + this.totalScore
}
let currentAction
let turn;

function pig(P1, P2, functionArg = currentAction) {
  let nextTurn = 'current-turn';
  if (turn === undefined){
    const firstInt = getRandomInt(100);
    if (firstInt > 50) {
      turn = P1.name
    }
    else {
      turn = P2.name
    }
  }
  if (functionArg === 'turn') {
    nextTurn = 'next-turn';
    roll()
  } else if (functionArg === 'roll') {
    roll()
  }
  function roll() {
    let randomInt = getRandomInt(6);
    // IF ONE YOU LOSE POINTS
    if (nextTurn === 'next-turn'){
      if (turn === P1.name) {
        P1.addTotalPoints()
        P1.removePoints()
        turn = P2.name
        nextTurn = 'current-turn'
      } else if (turn === P2.name) {
        P2.addTotalPoints()
        P2.removePoints()
        turn = P1.name
        nextTurn = 'current-turn'
      };
    } else if (randomInt === 1) {
      if (turn === P1.name) {
        P1.removePoints()
        turn = P2.name
        nextTurn = 'current-turn'
      } else if (turn === P2.name) {
        P2.removePoints()
        turn = P1.name
        nextTurn = 'current-turn'
      };
      // IF NEXT TURN ADD SCORE TO TOTAL POINTS
      // IF NOT NEXT TURN OR 1 ACCUMULATE
    } else {
      if (turn === P1.name) {
        if (P1.score + randomInt + P1.totalScore >= 100) {
          displayWinner(P1.name);
          console.log(`${P1.name} WINS!`)
        } else {
          P1.addPoints(randomInt)
        }
      } else if (turn === P2.name) {
        if (P2.score + randomInt + P2.totalScore >= 100) {
          displayWinner(P2.name);
          console.log(`${P2.name} WINS!`)
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
}

function diceRoll(roll){
  $("#dice-roll").html(roll);
}

$(document).ready(function() {
  let playerOne;
  let playerTwo;

  $("form#form-player-one").submit(function(event) {
    event.preventDefault();
    playerOne = new Player($("input#player-one-input").val());
    console.log(playerOne);
    $("#player-one").hide();
    $("#player-two").show();
  });
  $("form#form-player-two").submit(function(event) {
    event.preventDefault();
    playerTwo = new Player($("input#player-two-input").val());
    console.log(playerTwo);
    $("#player-two").hide();
    $("#game").show();
    pig(playerOne, playerTwo);
  });
  $('#next-turn').click(function(event) {
    event.preventDefault()
    currentAction = 'turn'
    pig(playerOne, playerTwo)
    console.log('Next Turn')
    console.log("\n")
  })
  $('#roll').click(function(event) {
    event.preventDefault()
    currentAction = 'roll'
    pig(playerOne, playerTwo)
    console.log('New Roll')
    console.log(playerOne.name + " score: " + playerOne.score)
    console.log(playerOne.name + " score: " + playerOne.totalScore)
    console.log("\n")
    console.log(playerTwo.name + " score: " + playerTwo.score)
    console.log(playerTwo.name + " score: " + playerTwo.totalScore)
    console.log("\n")
  })
});