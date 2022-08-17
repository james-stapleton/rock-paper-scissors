//user function

function userFunction() {
var choice = prompt("Choose R for rock, P for paper, S for scissors"); 
choice.toUpperCase;

console.log(choice); //debugging



}

var startGame = function() {
    //get choice from user
    var userOption = window.prompt("Enter R P or S");
    //end the game if user presses cancel
    if (!userOption) {
        return;
    }
    
    userOption = userOption.toUpperCase();
    console.log(`You chose ${userOption}`);

//computer function
var computerChoice = ["R", "P", "S"];
//needs to be 0, 1, or 2
var index = Math.floor(Math.random() * computerChoice.length);
var computer = computerChoice[index];

alert(`Computer chose ${computer}`);

if (computer == userOption) {
    window.prompt("Tie");
}
else if (userOption == "R" && computer == "S") {
window.prompt("You win!");
}
else if (userOption == "S" && computer == "P") {
    window.prompt("You win!");
}
else if (userOption == "P" && computer == "R") {
    window.prompt("You win!");
}
else {
    window.prompt("You lose");
}

}

startGame();
// tie are they equal?



// win: is it a win? no, then it's a loss

//loss: if you didn't win or tie, you lost




//comparison function

// if (window.confirm("Do you want to play a game?")) {
//     window.open("Okay, let's play", "Maybe next time!");
//   }



//userFunction();

// if (choice != "R" && choice != "S" && choice != "P") {
//     alert("Please enter R, P, or S");
//     choice = prompt("Choose R for rock, P for paper, S for scissors"); 
// }
// else {
//     console.log("Good choice")
// }