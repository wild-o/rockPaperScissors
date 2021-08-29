const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkButton();
  });
});


function computerPlay() {
  const textArray = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * textArray.length);

  return randomNumber;
}

function checkButton(){
  document.getElementById('1').addEventListener("click", () => {
    alert('You picked Rock!');
  });
}

  
function playRound() {


  let playerScore = 0;
  let computerScore = 0;

  computerPlay();
  
  if (checkButton === true) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
    newContent(playerScore, computerScore);
}



function newContent(s1, s2){
  const el = document.getElementById("MyDiv");
        while (el.firstChild) {
        el.removeChild(el.firstChild);
}
const result = document.getElementById("MyDiv");
    
    result.textContent = " Player: " + s1 + " CPU : " + s2;

    MyDiv.append(result);
}

//one function to get the player choice 
//one function to get the random CPU choice 
//one function to compare the choices
//one function to update the display with the new points