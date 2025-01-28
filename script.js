// globel variables
// to keep record of win

let humanScore = 0;
let computerScore = 0;


//generates rock paper scissors rendomly

function getComputerChoice() {
    let compValue = Math.random();
    
    if (compValue<=1/3) {
        return "Rock";
    } else if (compValue<=2/3) {
        return "Paper";
    } else if (compValue>2/3) {
        return "Scissors";
    } else {
        alert("Error Ocurred");
    }
    
}

//takes user input for rock paper scissors

function getHumanChoice() {
    let humValue = prompt("Choose : [Rock] [Paper] [Scissors]");
    humValue = humValue.toLowerCase();
    let a = humValue.slice(0,1);
    a = a.toUpperCase();
    let b = humValue.slice(1);
    humValue = a + b;
    if (humValue === "Rock") {
        return "Rock";
    } else if (humValue === "Paper") {
        return "Paper";
    } else if (humValue === "Scissors") {
        return "Scissors";
    } else {
        alert("Wrong Input: You can select only one of the given options");
        return getHumanChoice();
    }
    
}

// logic to play entire game

function playGame() {

    let roundNumber = prompt("How Much Rounds You Went To Play:");
    let roundCount = 1;
    while (roundCount<=roundNumber) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        function playRound(humanSelection,computerSelection) {
            if (humanSelection == "Rock") {
                if (computerSelection == "Rock") {
                    console.log("Rock Can't Beat Each Other!");
                } else if (computerSelection = "Paper") {
                    console.log("You Lose! Paper Beats Rock");
                    computerScore++;
                } else if (computerSelection = "Scissors") {
                    console.log("You Win! Rock Beats Scissors");
                    humanScore++;
                } else {
                    console.log("Error Ocurred in Rock");
                }
            } else if (humanSelection == "Paper") {
                if (computerSelection == "Paper") {
                    console.log("Paper Can't Beat Each Other!");
                } else if (computerSelection == "Rock") {
                    console.log("You Win! Paper Beats Rock");
                    humanScore++;
                } else if (computerSelection == "Scissors") {
                    console.log("You Lose! Scissors Beats Paper");
                    computerScore++;
                } else {
                    console.log("Error Ocurred in Paper");
                }
            } else if (humanSelection == "Scissors") {
                if (computerSelection == "Scissors") {
                    console.log("Scissors Can't Beat Each Other!");
                } else if (computerSelection == "Rock") {
                    console.log("You Lose! Rock Beats Scissors");
                    computerScore++;
                } else if (computerSelection == "Paper") {
                    console.log("You Win! Scissors Beats Paper");
                    humanScore++;
                } else {
                    console.log("Error Ocurred in Scissors");
                }
            } else {
                console.log("Error Ocurred");
            }
          
        
        }

        playRound(humanSelection,computerSelection);

        roundCount++;
    }


    if (humanScore>computerScore) {
        console.log("");
        console.log("You Won The Game...! Congretulations....!!!");
        console.log("");
        console.log("Your Score:",humanScore);
        console.log("Computer Score:",computerScore);
        console.log("");
        
    } else if (humanScore == computerScore) {
        console.log("");
        console.log("It's a Draw...!!! Try Again...!");
        console.log("");
        console.log("Your Score:",humanScore);
        console.log("Computer Score:",computerScore);
        console.log("");

    } else if (humanScore<computerScore) {
        console.log("");
        console.log("You Lost...!! Better Luck Next Time...!");
        console.log("");
        console.log("Your Score:",humanScore);
        console.log("Computer Score:",computerScore);
        console.log("");

    }
    
}

//call the final function to play the game

playGame();