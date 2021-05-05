
function game(){
    playRound();
}

function computerPlay(){
    const textArray = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    return (randomNumber);
}

function playRound(playerSelection, computerSelection){
    

    //Make another function to test one of these if statements to see if you can get the while loop or for loop to work
    
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, Paper, or Scissors: ");
        computerSelection = computerPlay();
   
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 2){
        playerCount++;
        const rock = console.log('You win! Rock beats Scissors!' + '\n score: ' + playerCount + ' Computer count: ' + computerCount);
    }
    
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 0){
        playerCount++;
        const paper = console.log('You win! Paper beats Rock!' + '\n score: ' + playerCount + ' CPU score: ' + computerCount);
    }
    
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 1){
        playerCount++
        const scissors = console.log('You win! Scissors beats Paper!' + '\n score: ' + playerCount + ' CPU score: ' + computerCount);
    }else{
        computerCount++;
        const loss = console.log('You lose...' + '\n CPU score: ' + computerCount + ' Player score: ' + playerCount);
        
    }
  }
        console.log('Results: ' + '\nYou: ' + playerCount + '\nComputer: ' + computerCount);
}

  function test(playerSelection, computerSelection){

    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, Paper, or Scissors: ");
        computerSelection = computerPlay();

        if(playerSelection.toLowerCase() == 'rock' && computerSelection == 2){
            playerCount++;
            const rock = console.log('You win! Rock beats Scissors!' + '\n score: ' + playerCount + ' Computer count: ' + computerCount);
        }
        else{
        computerCount++;
        const loss = console.log('You lose...' + '\n CPU score: ' + computerCount + ' Player score: ' + playerCount);
        
        }
    }
    
}



