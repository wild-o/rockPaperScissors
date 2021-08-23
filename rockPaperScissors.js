const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound();
  });
});


function computerPlay() {
  const textArray = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * textArray.length);

  return randomNumber;
}

function checkButton() {

  const outcome = computerPlay();

  if (document.getElementById('1').onclick && outcome == 2) {
    //Rock beats Scissors - Human Victory
    return true;
  } else if (
    document.getElementById('2').onclick &&
    outcome == 0
  ) {
    //Paper beats Rock - Human Victory
    return true;
  } else if (
    document.getElementById('3').onclick &&
    outcome == 1
  ) {
    //Scissors beats Rock - Human Victory
    return true;
  } else {
    // CPU Victory
    return false;
  }
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

