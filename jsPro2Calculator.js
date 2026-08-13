// Variables
let calcBox = document.getElementById("calcBox");
let calcAnswer = 0;

// Function to display user input on calculator textbox
function calcInput(userInput){
    let lastChar = calcBox.value.slice(-1);
    let operators = "+-*/"
    
    // Prevent input of operators more than once
    if(operators.includes(userInput) && operators.includes(lastChar)){
        return;
    }
    
    // Adding to calculator textbox String
    calcBox.value += userInput;
}

// Function to clear calculator textbox
function calcClear(){
    calcBox.value = "";
}

// Function to calculate solution
function calcSolution(){
    // eval() converts String into equation
    calcAnswer = eval(calcBox.value);
    calcBox.value = calcAnswer;
}