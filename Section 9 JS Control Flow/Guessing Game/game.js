// create secret number
var secretNumber = 7;

//ask user for guess
var stringGuess = prompt("I'm thinking of a whole number. Guess which one:");
var guess = Number(stringGuess);

// check if guess is right
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
} 
else if (guess > secretNumber) {
	alert("You guessed " + guess + ". Too high. Guess again.");
} 
else {
	alert("You guessed " + guess + ". Too low. Guess again.")
}






