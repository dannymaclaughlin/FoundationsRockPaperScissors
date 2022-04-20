const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const choice = choices[Math.floor(Math.random() * (choices.length))];
    return choice;
} 

//create a function called computerPlay                           
//function should return: rock, paper, or scissors
function playRound(playerSelection, computerSelection) {
    
} //create new function to play a single round of rock paper scissors: playGame
//playRound should take two parameters - playerSelection and computerSelection
//return string that declares winner of the round like "you lose! paper beats rock"
//make playerSelection parameter case-insensitive(so users can input rock, ROCK, or RocK)
//return results of this function call, do not console.log() them