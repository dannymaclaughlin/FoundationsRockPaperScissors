// DECLARES THE CHOICES FOR ANSWERS, PLAYER SCORE, COMPUTER SCORE, AND SETS BOTH SCORES TO 0.
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// FUNCTION TO RANDOMIZE THE ANSWER FOR computerSelection.
function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
} 

// DECLARES VARIABLE FOR BUTTONTEXT, PLAYER SELECTION, AND COMPUTER SELECTION IN THE GLOBAL SCOPE.
let buttonText = '';
let playerSelection = '';
let computerSelection = computerPlay();

// FUNCTION THAT PLAYS A ROUND, CHECKS ANSWERS TO SEE WHO WON THE ROUND, AND RETURNS A MESSAGE-
// -STATING WHO WON THE ROUND.
function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
    playerSelection = buttonText;
    computerSelection = computerPlay();

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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        console.log(buttonText);
    })
})

// LOGIC THAT PLAYS 5 ROUNDS OF THE GAME
// function game() {
//     console.log(playRound(playerSelection, computerSelection));
//     if (playerScore < 5 && computerScore < 5) {
//         game();
//      } else {
//          endGame();
//      }
// }


// FUNCTION THAT ENDS THE GAME AND DECLARES THE WINNER
// function endGame() {
//     if (playerScore > computerScore) {
//     console.log('you win! (:') 
//     } else if (computerScore > playerScore) {
//     console.log('you lose! ):');
//     }
// }

// console.log(buttonText);

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

// CALLS THE FUNCTION TO PLAY THE GAME
// game();