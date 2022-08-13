const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
} 

let buttonText = '';
let playerSelection = '';
let computerSelection = computerPlay();

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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;
        let playerSelection = buttonText;
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        // console.log(buttonText);
        game()
    })
})

function game() {
    playRound(playerSelection, computerSelection);
    if (playerScore < 5 && computerScore < 5) {
        game();
     } else {
         endGame();
     }
}

function endGame() {
    if (playerScore > computerScore) {
    console.log('you win! (:') 
    } else if (computerScore > playerScore) {
    console.log('you lose! ):');
    }
}

// game();