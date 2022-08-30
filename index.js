const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let buttonText = '';
let playerSelection = '';
let computerSelection = computerPlay();

function computerPlay() {
    return choices[~~(Math.random() * choices.length)];
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('results').innerHTML = 'you\'ve tied!'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        document.getElementById('results').innerHTML = 'you\'ve lost that round! you chose rock, the computer chose paper.';
        computerScore += 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        document.getElementById('results').innerHTML = 'you\'ve lost that round! you chose paper, the computer chose scissors.';
        computerScore += 1;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        document.getElementById('results').innerHTML = 'you\'ve lost that round! you chose scissors, the computer chose rock.';
        computerScore += 1;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        document.getElementById('results').innerHTML = 'you\'ve won that round! you chose paper, the computer chose rock.';
        playerScore += 1;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        document.getElementById('results').innerHTML = 'you\'ve won that round! you chose scissors, the computer chose paper.';
        playerScore += 1;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        document.getElementById('results').innerHTML = 'you\'ve won that round! you chose rock, the computer chose scissors.';
        playerScore += 1;
    } else {
        document.getElementById('results').innerHTML = 'that\'s not an acceptable answer!'
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

function playGame() {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    // const results = document.getElementById('results');
    // const resultsContent = document.createElement('div');
    // resultsContent.textContent = roundResult;
    // results.appendChild(resultsContent);

    const score = document.getElementById('roundScore');
    document.getElementById('score').innerHTML = `player score: ${playerScore} | computer score: ${computerScore}`;

    if (playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore === 5 || computerScore === 5) {
        endGame();
    } else if (playerScore === 6 || computerScore === 6) {
        location.reload();
    }
}

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         let buttonText = button.textContent;
//         let playerSelection = buttonText;
//         let computerSelection = computerPlay();

//         const results = document.getElementById('results');
//         const resultsContent = document.createElement('div');
//         resultsContent.classList.add('resultsSummary');
//         resultsContent.textContent = playRound(playerSelection, computerSelection);
//         results.appendChild(resultsContent);

//         const score = document.getElementById('score');
//         document.getElementById('score').innerHTML = `player score: ${playerScore} | computer score: ${computerScore}`;

        // if (playerScore < 5 && computerScore < 5) {
        //     return;
        // } else {
        //     endGame();
        // }
//     })
// })


function endGame() {
    if (playerScore > computerScore) {
    document.getElementById('results').innerHTML = 'you win! you\'ve beat the computer to 5 wins.';
    } else if (computerScore > playerScore) {
    document.getElementById('results').innerHTML = 'you lose! the computer has beat you to 5 wins';
    }
}