// Declaration of Variables
let oppRand = 0;
let oppChoice = "";
let playerChoice = "";

// Function for Player's Decision
function playerDecision(choice){
    
    // Declaring Image Elements in HTML as Variables
    let playerRock      = document.getElementById("playerRock");
    let playerPaper     = document.getElementById("playerPaper");
    let playerScissors  = document.getElementById("playerScissors");

    // Player's Choice Variable depends on the Image the Player has Clicked
    playerChoice = choice;

    // Highlighting the Chosen Image
    if (playerChoice == 'rock'){
        playerRock.style.border = "3px solid green";
        playerPaper.style.border = "none";
        playerScissors.style.border = "none";
    } else if (playerChoice == 'paper'){
        playerRock.style.border = "none";
        playerPaper.style.border = "3px solid green";
        playerScissors.style.border = "none";
    } else if (playerChoice == 'scissors'){
        playerRock.style.border = "none";
        playerPaper.style.border = "none";
        playerScissors.style.border = "3px solid green";
    }
}

function playGame(){
    if (playerChoice != ""){
        let rpsResults = document.getElementById("rpsResults");

        // Opponent's Choice Decided by Random Number Generator
        oppRand = Math.round(Math.random()*10);

        if (oppRand <= 3){
            oppChoice = "rock";
            document.getElementById("oppChoice").src = "jsPro3RPSRock.png";
        } else if (oppRand > 3 && oppRand <= 6){
            oppChoice = "paper"
            document.getElementById("oppChoice").src = "jsPro3RPSPaper.png";
        } else {
            oppChoice = "scissors";
            document.getElementById("oppChoice").src = "jsPro3RPSScissors.png";
        }

        // Results of Player's and Opponent's Choices
        if (playerChoice == "rock"     && oppChoice == "scissors" ||
            playerChoice == "paper"    && oppChoice == "rock"     ||
            playerChoice == "scissors" && oppChoice == "paper") {
            
            rpsResults.textContent = "YOU WIN!";
        
        } else if (oppChoice == playerChoice) {
            
            rpsResults.textContent = "ITS A DRAW!";
        
        } else {
            
            rpsResults.textContent = "YOU LOSE!";
        
        }
    }
}