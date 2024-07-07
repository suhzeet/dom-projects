let randomNum = Math.trunc(Math.random() * 100 + 1);
console.log(randomNum);

const submitGuess = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const lowHigh = document.querySelector(".lowOrHi");
const guessSlot = document.querySelector(".guesses");
const remainGuess = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let guessNum = 1;

let playGame = true;

if (playGame) {
  submitGuess.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = userInput.value;
    console.log(guess);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (guess === "" || isNaN(guess)) alert("Please enter a valid number!");
  else if (guess < 0) alert("Please enter value greater than 0!");
  else if (guess > 100) alert("Please enter value greater than 100!");
  else {
    if (guessNum === 10) {
      displayGuess(guess);
      displayMessage(`Gave Over. Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNum) {
    endGame();
    displayMessage(`You guessed it RIGHT`);
  } else if (guess > randomNum) displayMessage(`Your guess is TOOO high`);
  else if (guess < randomNum) displayMessage(`Your guess is TOOO low`);
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  guessNum++;
  remainGuess.innerHTML--;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<span>${message}</span>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("diabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    randomNum = Math.trunc(Math.random() * 100 + 1);
    prevGuess = [];
    guessNum = 1;
    guessSlot.innerHTML = ``;
    remainGuess.innerHTML = 10;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
