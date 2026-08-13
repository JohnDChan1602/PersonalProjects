// Initial Array Declaration
    // Array for Empty Squares on Grid
    let sqEmpty = [true, true, true, true, true, true, true, true, true];
    // Array for Filled Squares for Victory Condition
    let sqFill = ["","","","","","","","",""];

// Declaration of Variables
    // Set Initial Turn to Player's Turn
    let playerTurn = true;
    // Opponent Square Declaration
    let oppSquare = 0;
    // Player and Opponent Score Declaration
    let playerScore = 0;
    let oppScore = 0;

    // Button Variable (Hidden at Game Start)
    let buttonReset = document.getElementById("buttonReset");
    buttonReset.style.display = "none";

// Function to Start a New Game / Reset if Button is Pressed
function gameReset(){
    // Reset Arrays for Empty and Filled Squares
    sqEmpty.fill(true);
    sqFill.fill("");

    for(let i = 0; i < sqEmpty.length; i++){
        document.getElementById("sq"+i).style.display = "none";
    }

    // Reset Player's Turn
    playerTurn = true;

    // Set Message to Player's Turn
    document.getElementById("message").textContent = "PLAYER'S TURN";
    document.getElementById("message").style.color = "green";

    // Hide Reset Button
    buttonReset.style.display = "none";
}


// Player Action Function on Player's Turn (Enables Player Input)
function playerAction(square)
{
    // Exit the Function when not Player's Turn
    if(!playerTurn) return;

    // Set Message to Player's Turn
    document.getElementById("message").textContent = "PLAYER'S TURN";
    document.getElementById("message").style.color = "green";
        
    // Player Input
    if (sqEmpty[square]){
        // Player Places Cat in Square
        document.getElementById("sq"+square).style.display = "block";
        document.getElementById("sq"+square).src = "jsPro4CatzVsDogzCat.png";
        sqEmpty[square] = false;
        sqFill[square] = "cat";
        
        // Set Turn to Opponent's Turn
        playerTurn = false;
    
        // Start Opponent Function
        oppAction()
    }
}

// Random Number Function
function randInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

// Opponent's Action Function on Opponent's Turn
function oppAction(){

    // Player Victory Condition
    if( // Horizontal Line
        sqFill[0] == "cat" && sqFill[1] == "cat" && sqFill[2] == "cat" ||
        sqFill[3] == "cat" && sqFill[4] == "cat" && sqFill[5] == "cat" ||
        sqFill[6] == "cat" && sqFill[7] == "cat" && sqFill[8] == "cat" ||
        // Vertical Line
        sqFill[0] == "cat" && sqFill[3] == "cat" && sqFill[6] == "cat" ||
        sqFill[1] == "cat" && sqFill[4] == "cat" && sqFill[7] == "cat" ||
        sqFill[2] == "cat" && sqFill[5] == "cat" && sqFill[8] == "cat" ||
        // Diagonal Line
        sqFill[0] == "cat" && sqFill[4] == "cat" && sqFill[8] == "cat" ||
        sqFill[2] == "cat" && sqFill[4] == "cat" && sqFill[6] == "cat" 
    ){
        // Player Victory Message and Score
        playerScore ++;
        document.getElementById("message").textContent = "PLAYER WINS!";
        document.getElementById("message").style.color = "green";
        document.getElementById("playerScore").textContent = playerScore;
        console.log(playerScore);

        // Show Reset Button
        buttonReset.style.display = "block";
        
        return;
    }
    
    // Stop Game and Show Game Over Message if All Squares are Filled
    if(!sqEmpty.includes(true)){
        document.getElementById("message").textContent = "GAME OVER";
        document.getElementById("message").style.color = "red";
        
        // Show Reset Button
        buttonReset.style.display = "block";
        
        return; 
    }

    // Set Message to Opponent's Turn
    document.getElementById("message").textContent = "OPPONENT'S TURN";
    document.getElementById("message").style.color = "red";

    // Opponent Chooses a Random Number until It Finds an Empty Square
    do {
        oppSquare = randInt(0,8);
    } while(sqEmpty[oppSquare] == false);

    // Opponent takes Action After 1000ms / 1 second
    setTimeout(function(){
    
        // Opponent Places Dog in Square (Opponent Input)
        document.getElementById("sq"+oppSquare).style.display = "block";
        document.getElementById("sq"+oppSquare).src = "jsPro4CatzVsDogzDog.png";
        sqEmpty[oppSquare] = false;
        sqFill[oppSquare] = "dog";

        // Opponent Victory Condition
        if (
            // Horizontal Line
            sqFill[0] == "dog" && sqFill[1] == "dog" && sqFill[2] == "dog" ||
            sqFill[3] == "dog" && sqFill[4] == "dog" && sqFill[5] == "dog" ||
            sqFill[6] == "dog" && sqFill[7] == "dog" && sqFill[8] == "dog" ||
            // Vertical Line
            sqFill[0] == "dog" && sqFill[3] == "dog" && sqFill[6] == "dog" ||
            sqFill[1] == "dog" && sqFill[4] == "dog" && sqFill[7] == "dog" ||
            sqFill[2] == "dog" && sqFill[5] == "dog" && sqFill[8] == "dog" ||
            // Diagonal Line
            sqFill[0] == "dog" && sqFill[4] == "dog" && sqFill[8] == "dog" ||
            sqFill[2] == "dog" && sqFill[4] == "dog" && sqFill[6] == "dog"
        ){
            // Opponent Victory Message and Score
            oppScore ++;
            document.getElementById("message").textContent = "OPPONENT WINS!"
            document.getElementById("message").style.color = "red";
            document.getElementById("oppScore").textContent = oppScore;
            console.log(oppScore);
            
            // Show Reset Button
            buttonReset.style.display = "block";
            
            return;

        } else {
            // Turn and Message Return to Player's Turn
            playerTurn = true;
            document.getElementById("message").textContent = "PLAYER'S TURN";
            document.getElementById("message").style.color = "green";
        }
    },1000);
}



