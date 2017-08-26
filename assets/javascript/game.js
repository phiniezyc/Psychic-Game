

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuesses = [];
/*Don't need this but good to show letterToGuess not assigned value since it was created within the nextLetterToGuess function*/
//var letterToGuess = null;

/*We take the length of the array (26) and multiply by random number (gives decimal).  This gives a random letter guaranteed to be inside our array. We then use floor to give us a whole number. Otherwise get decimal.  This is all inside the index position of our computerChoices array to give us a random array each time. */
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesLeft = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var nextLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

// display user guesses
var updateGuessesSoFar = function() {
    document.getElementById("guessesSoFar").innerHTML = "Gueses You've Made: " + userGuesses.join(" ");
};
/*This resets the game to get a new letter to guess.  Must refresh to reset game w/ scorboard etc. */
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    userGuesses = [];

    nextLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

nextLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess. Also starts game.
document.onkeyup = function(event) {
    guessesLeft--;
    /*Takes user key pressed and sets all user guesses to lower case. onkey event was used*/
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
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("Nope, that's not going to do it. Try Again!");
        reset();
    }
    //reveals the letter the computer picked for testing only.
    console.log(letterToGuess);
};

