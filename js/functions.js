
document.getElementById("dice").addEventListener("click", rollDice);

function rollDice() {
    const diceImage = document.querySelector("#dice img");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = "./images/" + randomNumber + ".png"; 
    diceImage.alt = "Dice " + randomNumber;
}

