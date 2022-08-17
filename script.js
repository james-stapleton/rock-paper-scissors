//variables to track wins, losses and ties for prompt
var wins = 0;
var losses = 0;
var ties = 0;

//accept input from user, generate a random computer choice, then compare
var startGame = function () {
    //get choice from user
    var userOption = window.prompt("Enter R P or S");
    //end the game if user presses cancel
    if (!userOption) {
        return;
    }

    //set user input to uppercase
    userOption = userOption.toUpperCase();
    console.log(`You chose ${userOption}`);

    //computer function
    var computerChoice = ["R", "P", "S"];
    //needs to be 0, 1, or 2
    var index = Math.floor(Math.random() * computerChoice.length);
    //random number 0-2 is used as index into choice array
    var computer = computerChoice[index];

    alert(`Computer chose ${computer}`);

    //comparisons. Either a tie, win or loss
    if (computer == userOption) {
        window.prompt("Tie");
        ties++;
    }
    //if not a tie, check if user won
    else if (userOption == "R" && computer == "S") {
        window.prompt("You win!");
        wins++;
    } else if (userOption == "S" && computer == "P") {
        window.prompt("You win!");
        wins++;
    } else if (userOption == "P" && computer == "R") {
        window.prompt("You win!");
        wins++;
    }
    //if user didn't tie or win, they must have lost
    else {
        window.prompt("You lose");
        losses++;
    }

    //display score
    window.alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    //confirm if the user wants to play again
    //if so call the startGame function, if not then message
    var playAgain = window.confirm("Play again?");
    if (playAgain) {
        startGame();
    } else {
        window.alert("Thanks for playing");
    }
};

startGame();