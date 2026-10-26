// Beginning Game Logic
let humanScore = 0;
let computerScore = 0;
let rounds = 5;

// UI
const buttons = document.querySelector("#gameButtons");
let gameResults = document.getElementById("gameResults");

buttons.addEventListener("click", getHumanChoice);

// Getting the Computer's choice
function getComputerChoice() {

    // Choosing a random number between 1 and 3
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    // Finding out which number represents which position
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper"
    } else {
        return "scissors";
    }
}

// Getting the player's choice
function getHumanChoice(e) {
    let humanChoice = e.target.id;

    switch (humanChoice) {
        case "rock":
            playGame("rock");
            break;
        case "paper":
            playGame("paper");
            break;
        case "scissors":
            playGame("scissors");
            break;
    }
}

// Logging Game Results
function gameResultText(text) {
    let newResult = document.createElement("p");
    newResult.textContent = text;
    gameResults.appendChild(newResult);
}

// Playing the game
function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    rounds--;

    if (rounds <= 0) {
        endGame();
    }
}

// Playing a Round
function playRound(humanChoice, computerChoice) {

    // If there's a tie
    if (humanChoice === computerChoice) {
        gameResultText("You tied and the score remains the same");
        gameResultText(`Human: ${humanScore} | Computer: ${computerScore}`);
        return;
    }

    // Check to see who wins the round
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        gameResultText("You played rock and the computer played scissors, you win!");
        scoreHandler("human");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        gameResultText("You played paper and the computer played rock, you win!");
        scoreHandler("human");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        gameResultText("You played scissors and the computer played paper, you win!");
        scoreHandler("human");
    } else {
        gameResultText(`You played ${humanChoice} and the computer played ${computerChoice}, you lose...`);
        scoreHandler("computer");
    }
}

// Score Handler
function scoreHandler(winner) {
    if (winner === "human") {
        humanScore++;
    } else {
        computerScore++;
    }
    gameResultText(`Human: ${humanScore} | Computer: ${computerScore}`);
}

// Ending the game
function endGame() {
    buttons.removeEventListener("click", getHumanChoice);

    if (humanScore > computerScore) {
        gameResultText("You've won the game! Congratulations, here's your prize 🎁");
    } else if (humanScore === computerScore) {
        gameResultText("The game has ended in a tie. Try playing again to beat the computer!");
    } else {
        gameResultText("The computer won the game. How could you do this?!");
    }
    gameResultText("Want to play again? Refresh the page for a fresh start");
}