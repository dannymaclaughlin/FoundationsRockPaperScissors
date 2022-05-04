const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
} 

let playerSelection = prompt('rock, paper, or scissors?');
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return 'you tied';
    } else if (computerSelection = 'paper' && playerSelection === 'rock') {
        return 'you lose, paper beats rock!';
    } else if (computerSelection = 'scissors' && playerSelection === 'paper') {
        return 'you lose, scissors beats paper!';
    } else if (computerSelection = 'rock' && playerSelection === 'scissors') {
        return 'you lose, rock beats scissors!';
    } else if (computerSelection = 'rock' && playerSelection === 'paper') {
        return 'you win, paper beats rock!';
    } else if (computerSelection = 'paper' && playerSelection === 'scissors') {
        return 'you win, scissors beats paper!';
    } else if (computerSelection = 'scissors' && playerSelection === 'rock') {
        return 'you win, rock beats scissors!';
    }
}

console.log(playRound(playerSelection, computerSelection));

//create new function to play a single round of rock paper scissors: playRound
//playRound should take two parameters - playerSelection and computerSelection
//return string that declares winner of the round like "you lose! paper beats rock"
//make playerSelection parameter case-insensitive(so users can input rock, ROCK, or RocK)
//return results of this function call, do not console.log() them