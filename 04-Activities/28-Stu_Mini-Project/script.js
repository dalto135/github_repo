let words = ["hello", "javascript", "html", "dalton", "wilkins", "css"];
let guess = [];
let blanks = [];
let guessedWord;

let game = {
    wins: 0,
    losses: 0
}

// window.localStorage.setItem(JSON.stringify(game));
// localStorage.setItem("losses", "Wins: " + game.wins + " Losses: " + game.losses);
// localStorage.setItem("wins", "Wins: " + game.wins + " Losses: " + game.losses);

let timer = document.querySelector("#timer");
let displayedWord = document.querySelector("#displayed-word");
let button = document.querySelector("#button");
let reset = document.querySelector("reset");
let key = document.querySelector("#key");
let word = document.querySelector("#word");
let winsLosses = document.querySelector("#wins-losses");


if (localStorage.getItem("wins") !== null) {
    game.wins = localStorage.getItem("wins");
    game.losses = localStorage.getItem("losses");
}
else {
    localStorage.setItem("wins", game.wins);
    localStorage.setItem("losses", game.losses);
}
winsLosses.innerHTML = "Wins: " + localStorage.getItem("wins") + " Losses: " + localStorage.getItem("losses");


//countdown
function countdown() {
  let timeLeft = 5;
  timer.innerHTML = timeLeft + " seconds remaining";

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  let timeInterval = setInterval(function () {
    //
    timeLeft--;
    timer.innerHTML = timeLeft + " seconds remaining";


    if (timeLeft === 0) {
        clearInterval(timeInterval);

        if (blanks.includes("_ ")) {
            timer.innerHTML = "You lose!";
            game.losses++;
            localStorage.setItem("losses", game.losses);
            winsLosses.innerHTML = "Wins: " + localStorage.getItem("wins") + " Losses: " + localStorage.getItem("losses");
        }
        else {
            timer.innerHTML = "You win!";
            game.wins++;
            localStorage.setItem("wins", game.wins);
            winsLosses.innerHTML = "Wins: " + localStorage.getItem("wins") + " Losses: " + localStorage.getItem("losses");
        }
    }

  }, 1000);
}

//button press
button.addEventListener("click", function() {
    generateWord();
    countdown();
});

//keypress
function keyPress(event) {
    document.querySelector("#key").innerHTML = event.key;
    
        for (i = 0; i < guessedWord.length; i++) {

            if (guessedWord.charAt(i) === event.key && blanks[i] === "_ ") {

                for (j = 0; j < blanks.length; j++) {
                    
                    if (guessedWord.charAt(j) === event.key) {
                        blanks[j] = event.key;
                    }
                }
                displayedWord.innerHTML = "";
                for (i = 0; i < blanks.length; i++) {
                    displayedWord.innerHTML += blanks[i];
                }
            }
        }
}
document.addEventListener("keydown", keyPress);

function keyUnpress(event) {
    document.querySelector("#key").innerHTML = "";
}
document.addEventListener("keyup", keyUnpress);

//generate word
function generateWord() {
    guessedWord = words[Math.floor(Math.random() * words.length)];
    word.innerHTML = guessedWord;
    console.log("Word to guess: " + guessedWord);

    guess = [];
    for (i = 0; i < guessedWord.length; i++) {
        guess.push(guessedWord.charAt(i));
    }
    console.log("Array of characters for word: " + guess);

    displayedWord.innerHTML = "";
    blanks = [];
    for (i = 0; i < guessedWord.length; i++) {
        blanks.push("_ ");
    }
    for (i = 0; i < blanks.length; i++) {
        displayedWord.innerHTML += blanks[i];
    }
    console.log("Array of blanks: " + blanks);

}
