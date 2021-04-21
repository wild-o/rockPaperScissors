
function computerPlay(){
    const textArray = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    return (randomNumber);
}

function playRound(playerSelection, computerSelection){
    playerSelection = window.prompt("Rock, Paper, or Scissors: ");
    computerSelection = computerPlay();
    
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 2){
        console.log('You win!')
    }else{
        console.log('You lose...')
    }
}