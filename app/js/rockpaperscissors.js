////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {
    if (move) { return move; }
    else { return getInput(); }
    
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

var getComputerMove = function(move) {
     if (move) { return move; }
     else { return randomPlay(); }
      
     
     // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

var getWinner = function (playerMove,computerMove) {
	var winner;
    
	if(playerMove === computerMove) {
    	winner = "Tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "Player Wins";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "Computer Wins";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "Computer Wins";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "Player Wins";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "Player Wins";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "Computer Wins";
    }
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove(randomPlay());
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins +=1;
            console.log ("Player played" + playerMove + "while Computer played" + computerMove);
            console.log ("Player wins this round"); 
        }else if (winner === "computer") {
            computerWins +=1;
            console.log ("Player played" + playerMove + "while Computer played" + computerMove);
            console.log ("Computer wins this round");
        }else (winner === null) {
            console.log ("Player played" + playerMove + "while Computer played" + computerMove);
            console.log ("This is a tie");
        }
    console.log("The score is currently:" + playerWins + "to" + computerWins  + '\n');
        }

        
    return [playerWins, computerWins];
}

