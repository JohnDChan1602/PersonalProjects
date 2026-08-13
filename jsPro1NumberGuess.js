// Random number variable
let guessAnswer = 0;
// Button Variables
let buttonGenerate = document.getElementById("buttonGenerate");
let buttonGuess = document.getElementById("buttonGuess");
// Result text variable
let resultText = document.getElementById("guessResult");
// Score counter variable
let guessScore = 0;
document.getElementById("guessScore").textContent = "Correct Guesses: " + guessScore;

// Code to generate a random number
function generateRandom(){
    guessAnswer = Math.round(Math.random()*10);
    // Hide generate button
    buttonGenerate.style.display = "none";
    // Hide result text
    resultText.style.display = "none";
    // Enable guess button
    buttonGuess.disabled = false;
}

// Function to allow the user to guess the number
function guessNumber(){
    let inputNum = document.getElementById("guessNum").value;
    // Show result text
    resultText.style.display = "block";

    // Response to the correct guess
    if (inputNum == guessAnswer){
        document.getElementById("guessResult").textContent = "You guessed it! Great job!"
        // Show generate button upon correct answer
        buttonGenerate.style.display = "block";
        // Add to the score counter
        guessScore += 1;
        document.getElementById("guessScore").textContent = "Correct Guesses: " + guessScore;
        // Disable guess button
        buttonGuess.disabled = true;
    }
    // Response if the text box is empty
    else if (inputNum == ""){
        document.getElementById("guessResult").textContent = "Hey! You need to guess something, silly!"
    }
    // Response if the guess is lower than the answer
    else if (inputNum < guessAnswer){
        document.getElementById("guessResult").textContent = "Oops! You're too low! Try going higher!"
    }
    // Response if the guess is higher than the answer
    else if (inputNum > guessAnswer){
        document.getElementById("guessResult").textContent = "Oops! You're too high! Try going lower!"
    }
    // Response if the guess is something other than a number
    else if (Number.isInteger(inputNum) == false){
        document.getElementById("guessResult").textContent = "Hey! You need to guess a NUMBER, silly!"
    }
    
}