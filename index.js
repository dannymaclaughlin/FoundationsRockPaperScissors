// DECLARES A VARIABLE NAMED 'CHOICES' AND ASSIGNS 'ROCK' 'PAPER' & 'SCISSORS' TO IT
const choices = ['rock', 'paper', 'scissors'];
// DECLARES VARIABLES NAMED 'PLAYERSCORE' & 'COMPUTERSCORE' THEN SETS THEIR VALUES TO 0
let playerScore = 0;
let computerScore = 0;

// CREATES A FUNCTION TO RANDOMIZE THE COMPUTER SELECTION BASED OFF OF THE CHOICES VARIABLE
function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
} 

// DECLARES VARIABLES FOR BUTTONTEXT, PLAYERSELECTION, & COMPUTERSELECTION.
// SETS BUTTONTEXT & PLAYERSELECTION'S VALUE TO AN EMPTY STRING
// ASSIGNS COMPUTERPLAY FUNCTION TO COMPUTERSELECTION VARIABLE
let buttonText = '';
let playerSelection = '';
let computerSelection = computerPlay();

// CREATES A FUNCTION TO COMPARE THE PLAYER AND COMPUTERS SELECTION AND RETURNS WHO WON THE ROUND
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'you tied';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return 'you lose, paper beats rock! ):';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return 'you lose, scissors beats paper! ):';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return 'you lose, rock beats scissors! ):';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore++;
        return 'you win, paper beats rock! (:';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore++;
        return 'you win, scissors beats paper! (:';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++;
        return 'you win, rock beats scissors! (:';
    } else {
        return 'that\'s not an acceptable answer!'
    }
}

// DECLARES A VARIABLE FOR BUTTONS
// ASSIGNS DOCUMENT.QUERYSELECTORALL THAT SELECTS ALL BUTTONS AND ASSIGNS IT TO BUTTONS VARIABLE
const buttons = document.querySelectorAll('button');

// ADDS EVENTLISTENER TO BUTTONS VARIABLE THAT LISTENS FOR A CLICK
// MOVED THE BUTTONTEXT, PLAYERSELECTION, AN COMPUTERSELECTION ASSIGNMENT INTO THE EVENTLISTENER-
// -FUNCTION ASWELL AS THE PLAYROUND FUNCTION SO THAT IT ONLY PLAYS A ROUND AFTER THE BUTTON IS-
// -CLICKED.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        let playerSelection = buttonText;
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        game();
    })
})

// FUNCTION TO PLAY A ROUND UNTIL THE PLAYER OR COMPUTER HAS 5 WINS, THEN CALLS FOR THE ENDGAME-
// -FUNCTION ONCE THE PLAYER OR COMPUTER HAS HIT 5 WINS
function game() {
    playRound(playerSelection, computerSelection);
    if (playerScore < 5 && computerScore < 5) {
        game();
     } else {
         endGame();
     }
}

// FUNCTION THAT STATES WHETHER YOU WON OR LOST THE GAME
function endGame() {
    if (playerScore > computerScore) {
    console.log('you win! (:') 
    } else if (computerScore > playerScore) {
    console.log('you lose! ):');
    }
}

// game();