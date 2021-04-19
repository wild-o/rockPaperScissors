
function computerPlay(){
    const textArray = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * textArray.length);

    console.log(textArray[randomNumber]);
}