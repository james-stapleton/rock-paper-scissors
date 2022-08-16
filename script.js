
var choice = prompt("Choose R for rock, P for paper, S for scissors"); 
choice.toUpperCase;

console.log(choice); //debugging

if (choice != "R" && choice != "S" && choice != "P") {
    alert("Please enter R, P, or S");
    choice = prompt("Choose R for rock, P for paper, S for scissors"); 
   
}
else {
    console.log("Good choice")
}


var computerChoice = ["R", "P", "S"];