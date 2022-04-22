const choices = ['rock', 'paper', 'scissors'];

//create a function called computerPlay

//function should return: rock, paper, or scissors. choices variable should live outside of the function in the main
//scope so that it can be called outside of the function
function computerPlay() {
    const choice = choices[Math.floor(Math.random() * (choices.length))];
    return choice;
} 
                         
function playRound(playerSelection, computerSelection) {
    if (computerSelection() === 'rock') {
    return 'You Loser! Rock beats Scissors';
    } else if (computerSelection() === 'paper') {
    return 'You Loser! Paper beats Rock';
    } else if (computerSelection() === 'scissors') {
    return 'You Loser! Scissors beats paper'
    }
} 

const playerSelection = "rock";
function computerSelection() {
    if computerSelection === computerPlay();
}
//create new function to play a single round of rock paper scissors: playRound
//playRound should take two parameters - playerSelection and computerSelection
//return string that declares winner of the round like "you lose! paper beats rock"
//make playerSelection parameter case-insensitive(so users can input rock, ROCK, or RocK)
//return results of this function call, do not console.log() them