//Welcome to my javaScript file. I hope you enjoy the comments.


//all of my wonderful variables set, for further counting.
var wins = 0;
var losses = 0;
var guessRemaining = 9;
//empty array for letters chosen
var allUserGuesses = []
//Array of letters the computer can choose from once assigned numbers and set to random.
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Ask instructor how to sub below code for messy array. John slacked it to us.
//var alph = 'abcdefghijklmnopqrstuvwxyz'.split('');

var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
console.log(computerGuess);

function addUserLetters() {
    document.getElementById("letterTracker").textContent = allUserGuesses
}

//restart function to reset program to how it began.
function restart() {
    guessRemaining = 9;
    computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
    console.log(computerGuess);
    allUserGuesses = [];  
}


//captures users input and saves it into a variable
document.onkeyup = function (event) {
    var userGuess = event.key;
    allUserGuesses.push(userGuess);
    addUserLetters();
    
    
    
    //if you guess what the computer guesses, adds a win, changes html display. restart guesses.
    if (userGuess == computerGuess) {
        wins++;
        document.getElementById("userWins").textContent = wins;
        restart()
    }
    //if you don't, it takes away a guess. console log was for debugging. takes away a guess, displays it.
     else if (userGuess != computerGuess) {
        console.log(allUserGuesses)
        guessRemaining --;
        document.getElementById("guessesRemaining").textContent = guessRemaining;
    }
    //if guesses hits zero, adds a loss, displays it, restarts guesses and computer guess.
     if (guessRemaining === 0) {
        losses++;
        document.getElementById("lossCounter").textContent = losses;
        restart()
    }
}