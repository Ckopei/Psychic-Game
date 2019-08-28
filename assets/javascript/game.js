//Welcome to my javaScript file. I hope you enjoy the comments.


//all of my wonderful variables set to 0, for further counting.
var wins = 0;
var losses = 0;
var guessRemaining = 9;
var letterCounter = 0;
//empty array for letters chosen
var allUserGuesses = []
//Array of letters the computer can choose from once assigned numbers and set to random.
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Ask instructor how to sub below code for messy array. John slacked it to us.
//var alph = 'abcdefghijklmnopqrstuvwxyz'.split('');

//math.floor to assign numbers to array and choose at random.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//captures users input and saves it into a variable
document.onkeyup = function (event) {
    var userGuess = event.key;
}
