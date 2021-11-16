const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound();
    });
});


function playRound() {
  
  let playerScore = 0;
  let computerScore = 0;

  const finalResult = checkButton();

  if (finalResult === true) { 
    playerScore += 1;
  } else {
    computerScore += 1;
  }
    newContent(playerScore, computerScore);
}

function checkButton(){

  const result = allCases();
  const CPU = computerPlay();
  
  if(result == 0 && CPU == 2){
      return true; 
    }
    else if(result == 1 && CPU == 0){
      return true; 
    }else if(result == 2 && CPU == 1){
      return true; 
    }else{
      return false; 
    }
  }

function allCases(){
    let clicked = 0;
    
    document.getElementById('1').addEventListener("click", function() {
      clicked = 1; 
    });
    
    return clicked; 
    

}

function computerPlay() {
  const textArray = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * textArray.length);

  return randomNumber;
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