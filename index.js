// DECLARES A VARIABLE TO HOLD AN ARRAY OF CHOICES
const choices = ['rock', 'paper', 'scissors'];
// DECLARES A VARIABLE FOR PLAYERSCORE AND COMPUTERSCORE AND SETS THEM TO 0
let playerScore = 0;
let computerScore = 0;
// DECLARES A VARIABLE FOR PLAYERSELECTION AND SETS IT TO AN EMPTY STRING
let playerSelection = '';

// DECLARES VARIABLES FOR ROCK, PAPER, & SCISSORS AND ASSIGNS IT TO THE RPS BUTTON ID'S
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reloadPage = document.querySelector('#reloadPage');

const rematchPhoto = document.querySelector('.hiddenRematchPhoto');
rematchPhoto.classList.add('hide');
const rematchButton = document.querySelector('.hiddenRematchButton');
rematchButton.classList.add('hide');

// FUNCTION TO SELECT ONE OF THE CHOICES ARRAYS AT RANDOM
function computerPlay() {
    return choices[~~(Math.random() * choices.length)];
} 

// EVENTLISTENERS FOR BUTTON CLICKS TO CORRELATE WITH PLAYERSELECTION
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame();
});
reloadPage.addEventListener('click', () => {
    rematch();
})

// FUNCTION TO COMPARE PLAYERSELECTION WITH COMPUTERSELECTION
// INCREMENTS THE PLAYER & COMPUTER SCORE
// DISPLAYS MESSAGE SUMMARY OF WHO WON THE ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve tied!'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve lost that round! you chose rock, the computer chose paper.';
        computerScore += 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve lost that round! you chose paper, the computer chose scissors.';
        computerScore += 1;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve lost that round! you chose scissors, the computer chose rock.';
        computerScore += 1;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve won that round! you chose paper, the computer chose rock.';
        playerScore += 1;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve won that round! you chose scissors, the computer chose paper.';
        playerScore += 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        document.getElementById('resultsMessage').innerHTML = 'you\'ve won that round! you chose rock, the computer chose scissors.';
        playerScore += 1;
    } else {
        document.getElementById('resultsMessage').innerHTML = 'that\'s not an acceptable answer!'
    }
}

// FUNCTION THAT ASSIGNS COMPUTERPLAY(FUNCTION) TO COMPUTERSELECTION(VARIABLE)
// RUNS THE PLAYROUND FUNCTION
// DISPLAYS COMPUTER & PLAYER SCORE
// RUNS THE ENDGAME FUNCTION WHEN PLAYER OR COMPUTER REACHES 5 WINS
function playGame() {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    const score = document.getElementById('roundScore');
    document.getElementById('roundScore').innerHTML = `player score: ${playerScore} | computer score: ${computerScore}`;

    if (playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

// FUNCTION THAT DISPLAYS GAME OVER MESSAGE WHEN RAN
function endGame() {
    if (playerScore > computerScore) {
    document.getElementById('bodyContainer').innerHTML = "<span class='gameOverText'>GAME OVER <BR> you win! you\'ve beat the computer to 5 wins.</span>";
    rematchPhoto.classList.remove('hide');
    rematchButton.classList.remove('hide');
    } else if (computerScore > playerScore) {
    document.getElementById('bodyContainer').innerHTML = "<span class='gameOverText'>GAME OVER <BR> you lose! the computer has beat you to 5 wins.</span>";
    rematchPhoto.classList.remove('hide');
    rematchButton.classList.remove('hide');
    }
}

function rematch() {
    location.reload();
}