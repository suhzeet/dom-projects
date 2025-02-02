# DOM Projects

### SOLUTION CODES :

### Project-1: BackgroundColor Changer

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (chai) => {
    console.log(chai);
    console.log(chai.target);
    switch (chai.target.id) {
      case chai.target.id:
        body.style.backgroundColor = chai.target.id;
        break;
    }
  });
});
```

### Project-2: BMI Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  console.log(height, weight, results);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6)
      results.innerHTML = `<span>Your BMI: ${bmi}</span><br><i>Under Weight</i>`;
    else if (bmi > 18.6 && bmi < 24.9)
      results.innerHTML = `<span>Your BMI: ${bmi}</span><br><i>Normal Range</i>`;
    else if (bmi > 24.9)
      results.innerHTML = `<span>Your BMI: ${bmi}</span><br><i>OverWeight</i>`;
    else {
      results.innerHTML = `<span>Your BMI: ${bmi}</span><br><i>Out of Order</i>`;
    }
  }
});
```

### Project-3: Local Time

```javascript
const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

### Project-4: Guess a Number

```javascript
function checkGuess(guess) {
  if (guess == randomNum) {
    endGame();
    displayMessage(`You guessed it RIGHT`);
  } else if (guess > randomNum) displayMessage(`Your guess is TOOO high`);
  else if (guess < randomNum) displayMessage(`Your guess is TOOO low`);
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
```

### Project-5: Event KeyCodes

```
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});

```

### Project-6: Unlimited Bg Change

```
let changeBg;
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.trunc(Math.random() * 16)];
  }
  return color;
};

const startColorChange = () => {
  if (!changeBg == true) {
    changeBg = setInterval(() => {
      document.querySelector("body").style.backgroundColor = randomColor();
    }, 1000);
    console.log(changeBg);
  }
};

const stopColorChange = () => {
  clearInterval(changeBg);
  changeBg = null;
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
```
