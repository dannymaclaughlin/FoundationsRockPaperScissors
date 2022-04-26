const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const choice = choices[Math.floor(Math.random() * (choices.length))];
    return choice;
} 

function playRound(playerSelection, computerSelection) {
    if (computerPlay = 'paper' && playerSelection === 'rock') {
        return 'you lose, paper beats rock!'
    } else if (computerPlay = 'scissors' && playerSelection === 'paper') {
        return 'you lose, scissors beats paper!'
    } else if (computerPlay = 'rock' && playerSelection === 'scissors') {
        return 'you lose, rock beats scissors!'
    } else if (computerPlay = 'rock' && playerSelection === 'paper') {
        return 'you win, paper beats rock!'
    } else if (computerPlay = 'paper' && playerSelection === 'scissors') {
        return 'you win, scissors beats paper!'
    } else if (computerPlay = 'scissors' && playerSelection === 'rock') {
        return 'you win, rock beats scissors!'
    }
}

const playerSelection = 'paper';
const computerSelection = computerPlay();

//create new function to play a single round of rock paper scissors: playRound
//playRound should take two parameters - playerSelection and computerSelection
//return string that declares winner of the round like "you lose! paper beats rock"
//make playerSelection parameter case-insensitive(so users can input rock, ROCK, or RocK)
//return results of this function call, do not console.log() them