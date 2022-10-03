// Selecting the DOM:
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let number = document.querySelector(".number");

// Generate the Random Number:
const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

// Display Message Function:
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Setting the variables:
let scoreNum = 20;
let highscoreNum = 0;
let randomNumber = generateRandomNumber();

console.log(randomNumber);

// Performing the click event on the button:
document.querySelector(".btn-check").addEventListener("click", () => {
  let inputnum = Number(document.querySelector(".guess").value);
  if (!inputnum) {
    displayMessage("😔 No number to check");
  }
  //   If the number is equal:
  if (inputnum === randomNumber) {
    document.body.style.backgroundColor = "green";
    displayMessage("🏆 You guessed it correct");
    number.textContent = randomNumber;
    if (scoreNum > highscoreNum) {
      highscoreNum = scoreNum;
    }
    highScore.innerHTML = highscoreNum;
  }

  if (inputnum !== randomNumber) {
    displayMessage(
      randomNumber > inputnum ? " Too low number" : " Too high number"
    );
    console.log(scoreNum);
    scoreNum = scoreNum - 1;
    score.innerHTML = scoreNum;
  } else {
    displayMessage("You lost the game");
  }
});

// Performing the action when again button is clicked:
document.querySelector(".btn-again").addEventListener("click", () => {
  scoreNum = 20;
  score.innerHTML = scoreNum;
  number.innerHTML = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
});
