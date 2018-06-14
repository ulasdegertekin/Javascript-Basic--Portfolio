
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
// Creating variables to hold the number of wins, losses, They start at 0.
var wins = 0;
var losses = 0;
var numGuess = 9;
var allGuesses = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


for (var i = 0; i < numGuess.length; i--){ 
    this.write.innerHTML= userGuess;  
};
    
// This function is run whenever the user presses a key.
   
document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    if (allGuesses.includes(userGuess)) {
        return;
    }
    else {
        allGuesses.push(userGuess);
    }
    console.log("Letter guesses are: " + allGuesses);

    // This logic determines the outcome of the game (win/loss/livesleft), and increments the appropriate number
    if ((userGuess == computerChoices) || (userGuess != computerChoices)) {

        //key up event decreasing the number of userguess by -1.
        if (userGuess) {
            numGuess--;
            if (numGuess == 0) {
                numGuess = 9;
                losses++;
                allGuesses = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        }
        console.log("User lossses: " + losses);

        if (userGuess === computerGuess ) {
            wins++;
            numGuess = 9;
            allGuesses = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        console.log("User wins: " + wins);
        

        // Creating a variable to hold our new HTML. HTML keeps track of the user and computer guesses, number of guesses left and write down the guesses.
        var html =
        "<p>WINS: " + wins + "</p>" +
        "<p>LOSSES: " + losses + "</p>" +
        "<p>GUESS LEFT: " + numGuess + "</p>" +
        "<p>LETTERS YOU GUESS: " + allGuesses + "</p>";
    
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        
    }
};
        