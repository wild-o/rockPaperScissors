
function computerPlay(){
    const textArray = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    return (randomNumber);
}

function playRound(playerSelection, computerSelection){
    playerSelection = window.prompt("Rock, Paper, or Scissors: ");
    computerSelection = computerPlay();

    
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 2){
        const rock = console.log('You win! Rock beats Scissors!');
        return rock;
    }
    
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 0){
        const paper = console.log('You win! Paper beats Rock!');
        return paper;
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 1){
        const scissors = console.log('You win! Scissors beats Paper!');
        return scissors;
    
    }else{
        const loss = console.log('You lose...');
        return loss;
    }
}