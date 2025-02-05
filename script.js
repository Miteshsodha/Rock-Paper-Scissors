// global variables
// to keep record of win

let humanScore = 0;
let computerScore = 0;

// generates rock paper scissors randomly

function getComputerChoice() {
    let compValue = Math.random();
    
    if (compValue <= 1/3) {
        return "Rock";
    } else if (compValue <= 2/3) {
        return "Paper";
    } else if (compValue > 2/3) {
        return "Scissors";
    } else {
        alert("Error Occurred");
    }
}

// takes user input for rock paper scissors

function getHumanChoice(humValue) {
    humValue = humValue.toLowerCase();
    let a = humValue.slice(0, 1);
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

// stops until user selects rock paper scissors

function waitForUserSelection() {
    return new Promise((resolve) => {
        const options = document.querySelectorAll('input[name="choice"]');
        options.forEach(option => {
            option.addEventListener('change', function handler() {
                options.forEach(opt => opt.removeEventListener('change', handler));
                resolve(option.value);
            });
        });
    });
}

// plays the game

async function playGame(roundNumber) {
    let roundCount = 1;

    while (roundCount <= roundNumber) {
        if (roundCount > roundNumber) {
            document.getElementById("round").innerHTML = "";
        } else {
            document.getElementById("round").innerHTML = "Round: " + roundCount;
        }

        // await is used below so that the game waits for the user to select an option
        let selectedOptionValue = await waitForUserSelection();
        let humanSelection = getHumanChoice(selectedOptionValue);
        let computerSelection = getComputerChoice();

        function playRound(humanSelection, computerSelection) {
            if (humanSelection == "Rock") {
                if (computerSelection == "Rock") {
                    document.getElementById("msg").innerHTML = "Rock Can't Beat Each Other!";
                } else if (computerSelection == "Paper") {
                    document.getElementById("msg").innerHTML = ("You Lose! Paper Beats Rock");
                    computerScore++;
                } else if (computerSelection == "Scissors") {
                    document.getElementById("msg").innerHTML = ("You Win! Rock Beats Scissors");
                    humanScore++;
                }
            } else if (humanSelection == "Paper") {
                if (computerSelection == "Rock") {
                    document.getElementById("msg").innerHTML = ("You Win! Paper Beats Rock");
                    humanScore++;
                } else if (computerSelection == "Paper") {
                    document.getElementById("msg").innerHTML = ("Paper Can't Beat Each Other!");
                } else if (computerSelection == "Scissors") {
                    document.getElementById("msg").innerHTML = ("You Lose! Scissors Beats Paper");
                    computerScore++;
                }
            } else if (humanSelection == "Scissors") {
                if (computerSelection == "Rock") {
                    document.getElementById("msg").innerHTML = ("You Lose! Rock Beats Scissors");
                    computerScore++;
                } else if (computerSelection == "Paper") {
                    document.getElementById("msg").innerHTML = ("You Win! Scissors Beats Paper");
                    humanScore++;
                } else if (computerSelection == "Scissors") {
                    document.getElementById("msg").innerHTML = ("Scissors Can't Beat Each Other!");
                }
            } else {
                document.getElementById("msg").innerHTML = ("Error Occurred");
            }
        }

        playRound(humanSelection, computerSelection);
        roundCount++;
        document.querySelectorAll('input[name="choice"]').forEach(radio => radio.checked = false);
    }

    if (humanScore > computerScore) {
        document.getElementById("msg1").innerHTML = ("_________________");
        document.getElementById("msg2").innerHTML = ("Final Result:");     
        document.getElementById("msg3").innerHTML = ("You Win the Game!");
        document.getElementById("msg4").innerHTML = ("You: " + humanScore +" | "+ "Computer: " + computerScore);
        
    } else if (humanScore < computerScore) {
        document.getElementById("msg1").innerHTML = ("_________________");
        document.getElementById("msg2").innerHTML = ("Final Result:");     
        document.getElementById("msg3").innerHTML = ("You Lose the Game!");
        document.getElementById("msg4").innerHTML = ("You: " + humanScore +" | "+ "Computer: " + computerScore);
    } else {
        document.getElementById("msg1").innerHTML = ("_________________");
        document.getElementById("msg2").innerHTML = ("Final Result:");       
        document.getElementById("msg3").innerHTML = ("The Game is a Tie!");
        document.getElementById("msg4").innerHTML = ("You: " + humanScore +" | "+ "Computer: " + computerScore);
    }  
}

function startGame() {
    const roundNumber = document.getElementById("roundNumber").value;
    if (roundNumber > 0) {
        playGame(roundNumber);
    } else {
        alert("Please enter a valid number of rounds.");
    }
}