
var score = {
    you: 0,
    comp: 0,
    tie: 0
}
var again = true;
var computer = "";
var random;
var userInput = "";

while (again) {
    userInput = prompt("Enter R, P or S: ");
    userInput = userInput.toUpperCase();
    while (userInput !== "R" && userInput !== "P" && userInput !== "S") {
        userInput = prompt("Enter R, P or S: ");
        userInput = userInput.toUpperCase();
    }
    

    random = Math.floor(Math.random() * 3);

    if (random === 0) {
        computer = "S";
    }
    else if (random === 1) {
        computer = "R";
    }
    else {
        computer = "P";
    }



    console.log(userInput);
    console.log(computer);

    if (userInput === computer) {
        console.log("Tie!");
        score.tie++;
    }
    else if (((userInput === "S") && (computer === "R")) || 
    ((userInput === "R") && (computer === "P")) || 
    ((userInput === "P") && (computer === "S"))){
        console.log("Computer wins!");
            score.comp++;
    }
    else {
        console.log("You win!");
            score.you++;
    }



    console.log(score);
    again = confirm("Would you like to play again?");
}
