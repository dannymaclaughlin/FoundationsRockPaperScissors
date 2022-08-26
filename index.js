const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let buttonText = '';
let playerSelection = '';
let computerSelection = computerPlay();
let roundResult = '';

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'you tied';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore += 1;
        return 'you lose! you chose rock, the computer chose paper.';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore += 1;
        return 'you lose! you chose paper, the computer chose scissors.';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore += 1;
        return 'you lose! you chose scissors, the computer chose rock.';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore += 1;
        return 'you win! you chose paper, the computer chose rock.';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore += 1;
        return 'you win! you chose scissors, the computer chose paper.';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore += 1;
        return 'you win! you chose rock, the computer chose scissors.';
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

        const results = document.getElementById('results');
        const resultsContent = document.createElement('div');
        resultsContent.classList.add('resultsSummary');
        resultsContent.textContent = playRound(playerSelection, computerSelection);
        results.appendChild(resultsContent);

        const score = document.getElementById('score');
        document.getElementById('score').innerHTML = `player score: ${playerScore} | computer score: ${computerScore}`;

        if (playerScore < 5 && computerScore < 5) {
            return;
        } else {
            endGame();
        }
    })
})



function endGame() {
    if (playerScore > computerScore) {
    document.getElementById('results').innerHTML = 'you win!';
    } else if (computerScore > playerScore) {
    document.getElementById('results').innerHTML = 'you lose!';
    }
}