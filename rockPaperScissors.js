
function computerPlay(){
    const textArray = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    console.log(textArray[randomNumber]);
}

function playRound(playerSelection, computerSelections){
    const selection = window.prompt("Make your choice: ");
    console.log(selection);
}