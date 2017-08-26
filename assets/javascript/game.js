

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuesses = [];
var letterToGuess = null;

/*We take the length of the array (26) and multiply by random number (gives decimal).  This gives a random letter guaranteed to be inside our array. We then use floor to give us a whole number. Otherwise get decimal.  This is all inside the index position of our computerChoices array to give us a random array each time. */
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas.
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + userGuesses.join(", ");
};
// Function will be called when we reset everything
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    userGuesses = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    userGuesses.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0){
        if (userGuess == letterToGuess){
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("You got it! You're well on your way to becoming a professional pyschic.");
            reset();
        }
    }else if(guessesLeft == 0){
        // Then we will loss and we'll update the html to display the loss
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("Nope, that's not going to do it. Try Again!");
        // Then we'll call the reset.
        reset();
    }
};

