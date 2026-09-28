/*
create a variable that can change named playerScore and set it equal to 0
create a variable that can change named computerScore and set it equal to 0

create a function named getComputerChoice

    create a variable that can change named randomNum to create a random number using Math.floor with Math.random multiplied by 3 and adding 1 to create a number that is between 1 and 3.

    create an if statement that if the randomNum variable is equal to 1, then return 'ROCK'
        create an else if statement that if randomNum variable is equal to 2, then return 'PAPER'
        create an else statement that if randomNum variable is something else, then return 'SCISSORS'

create a function named getplayerChoice

    create a variable named playerChoice that sends a prompt asking the user to choose Rock, Paper, or Scissors and then make the response uppercase
    return the playerChoice variable

create a function named playGame

    create a function named playRound with 2 variables named playerChoice and computerChoice

        create an if statement the humanChoice and computerChoice are the same, then console log that the player choice was the same as the computer's choice. Mention that it's a tie

        create an else if statement that the human wins by beating the computer by...
            player chooses ROCK and computer chooses SCISSORS OR
            player chooses PAPER and computer chooses ROCK OR
            player chooses SCISSORS and computer chooses PAPER

            then log to the console that the human's choice won vs the computer choice
            increment the human's score by 1

        create an else if statement that the computer wins by beating the player by...
            computer chooses ROCK and player chooses SCISSORS OR
            computer chooses PAPER and player chooses ROCK OR
            computer chooses SCISSORS and player chooses PAPER

            then log to the console that the computer's choice won vs the player's choice
            increment the computer's score by 1

        create an else statement that if the player didn't choose a valid option
            log to the console "Please enter, rock, paper, or scissors before playing"
            run the function of playRound with the arguments of the functions getPlayerChoice and getComputerChoice

    run the function of playRound with the arguments of the functions getPlayerChoice and getComputerChoice

Create a for...loop of counting to 5 to play 5 rounds

    call the playGame function

    create an if statement that if the playerScore is higher than the computerScore
        log to the console that you've won the game and show the score of the player and the computer

    create an else if statement that if the playerScore is lower than the computerScore
        log to the console that you've lost the round and show the score of the player and the computer

    create an else statement if the scores are the same between the player and computer
        log to the console that you've tied the game and show the score of the player and the computer
*/