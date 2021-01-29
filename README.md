# *PIG DICE*
#### *Co-Created By: Mike Pingel*
#### *Co-Created By: David Couch*
#### *A Dice Game Called PIG!*

* * *

## Description  
`A dice game made in JavaScript using constructors, prototypes, objects, and conditionals. This game is played between two users that roll the dice to gain points.`

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

* * *
## Specs
```js
Describe: Player()
Test: 'It will create an object that holds name and score'
Expect: new Player('Mike').toEqual({name: 'Mike', score: 0, totalScore: 0})

Describe: Player.prototype.addPoints()
Test: 'It will add the accumulation of rolls from a user roll'
Expect: playerOne.addPoints(4).toEqual({name: 'Mike', score: 4, totalScore: 0})

Describe: Player.prototype.removePoints()
Test: 'It will remove the accumulative points of a user'
Expect: playerOne.removePoints().toEqual({name: 'Mike', score: 0, totalScore: 0})

Describe: Player.prototype.addTotalPoints()
Test: 'It will add accumulative points to the total score'
Expect: playerOne.addTotalPoints().toEqual({name: 'Mike', score: 0, totalScore: 4})

Describe: Game()
Test: 'It will create a game to function as the global variables needed to function'
Expect: new Game().toEqual({turn: undefined, currentAction: undefined, roll: undefined})

Describe: Game.prototype.setRoll
Test: 'it will set the current roll'
Expect: pigGame.setRoll(4).toEqual({turn: undefined, currentAction: undefined, roll: 4})

Describe: Game.prototype.setTurn
Test: 'It will set the player turn'
Expect: pigGame.setTurn(playerOne).toEqual({turn: 'Mike', currentAction: undefined, roll: undefined})

Describe: Game.prototype.setAction
Test: 'It set the current action to be taken'
Expect: pigGame.setAction('roll').toEqual({turn: undefined, currentAction: 'roll', roll: undefined})

```
* * *

## Technologies used
* HTML
* CSS
* Git and Github
* JavaScript
* JQuery

* * *

## Setup instructions:  

* _Go to_ _https://github.com/dcouch440/pig-dice.git_
*  Navigate to the code button on the github website.\
![Code button](/img/README/code.PNG)

* Click on the code button to open the menu.\
![Github Repo Example](/img/README/HTTPS.png)

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.
```bash
 cd Desktop
```  

- Once you have chosen your desired directory use the command.
```bash 
git clone https://github.com/dcouch440/pig-dice.git
```

<div 
  style="
    background-color: #d1ecf1; 
    color: grey; padding: 6px; 
    font-size: 9px; 
    border-radius: 5px; 
    border: 1px solid #d4ecf1; 
    margin-bottom: 12px"
> 
  <span 
    style="
      font-size: 12px; 
      font-weight: 600; 
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span 
    style="
      font-size: 12px; 
      font-weight: 900; 
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note : 
  </span> 
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>


* Then after the process is completed use the command.

``` bash
code .
```
* This will open the directory in your default code editor and from there it is required that you open the index.html file from live server (Visual Studio Code) or your code editors counterpart. You <strong>must</strong> use this method. Opening this web app from the index.html file alone will cause it to not function correctly!

<p 
  style="
    font-size: 12px; 
    background-color: #8c8c8c; 
    border-radius: 2px; 
    padding: 1px 5px; 
    text-align: center; 
    color: white; 
    margin-bottom: 24px"
>
  <span style="font-weight: 700; color: purple">Live server</span>
  <img src="img/README/liveserver.PNG">
</p>

* * *

## To Do:
* {future changes to the project}

* * *

## Addition comments:
* Created on x/xx/21

* * *

## License:
> *&copy; David Couch, 2021*

> *&copy; Mike Pingel, 2021*


Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_David Couch: [Email](dcouch440@gmail.com)_

_Mike Pingel: [Email](mdpingel@gmail.com)_