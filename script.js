// Score starting at 0
let playerScore = 0;
let computerScore = 0;

// Computer's Choice
function getComputerChoice() {
    // Generate a random number for the computer to choose from between 1 and 3
    // 1 is rock, 2 is paper, and 3 is scissors

    // Choosing a random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;

    // Finding out which number represents which position
    if (randomNum === 1) {
        return 'ROCK';
    } else if (randomNum === 2) {
        return 'PAPER'
    } else {
        return 'SCISSORS';
    }
}

// Player's Choice
function getPlayerChoice() {

    // Asking the player what they want to choose before starting and making their response uppercase
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toUpperCase();
    return playerChoice;
}

// Playing the game
function playGame() {

    // Playing a Round
    function playRound(playerChoice, computerChoice) {

        // Seeing if the player won or the computer won or tied the round depending on what's been chosen

        // A tie between both if choices are the same, no one gets a point
        if (playerChoice === computerChoice) {

            console.log(`Player chose: ${playerChoice} | Computer chose: ${computerChoice}. It's a tie this round!`);

            // Player wins based on choice, player gets a point
        } else if
            ((playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (playerChoice === "PAPER" && computerChoice === "ROCK") ||
            (playerChoice === "SCISSORS" && computerChoice === "PAPER")) {

            console.log(`You win the round! ${playerChoice} vs. ${computerChoice}`);
            playerScore++;


            // Computer wins based on choice, computer gets a point
        } else if
            ((playerChoice === "ROCK" && computerChoice === "PAPER") ||
            (playerChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (playerChoice === "SCISSORS" && computerChoice === "ROCK")) {

            console.log(`You lose the round... ${playerChoice} vs. ${computerChoice}`);
            computerScore++;
        }

        // If player doesn't enter anything in prompt, ask again and restart the round
        else {
            console.log("Please enter rock, paper, or scissors before playing");
            playRound(getPlayerChoice(), getComputerChoice());
        }
    }

    // Play a round and get the player and computer choices
    playRound(getPlayerChoice(), getComputerChoice());
}

// Playing 5 rounds of RPS
for (let i = 0; i < 5; i++) {
    playGame();

    // If player's score is bigger than computer score, player won overall game
    if (playerScore > computerScore) {
        console.log(`You've won! | ${playerScore} : ${computerScore}`);

        // If computer's score is bigger than player score, computer won overall game
    } else if (playerScore < computerScore) {
        console.log(`You've lost... | ${playerScore} : ${computerScore}`);

        // If scores are the same, then it's a tie between both player and computer
    } else {
        console.log(`You've tied | ${playerScore} : ${computerScore}`);
    }
}