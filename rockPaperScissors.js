
function computerPlay(){
    const textArray = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    return (randomNumber);
}

function playRound(playerSelection, computerSelection){
    playerSelection = window.prompt("Rock, Paper, or Scissors: ");
    computerSelection = computerPlay();
    
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 2){
        console.log('You win! Rock beats Scissors!')}
    
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 0){
        console.log('You win! Paper beats Rock!')
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 1){
        console.log('You win! Scissors beats Paper!')
    }else{
        console.log('You lose...')
    }
}