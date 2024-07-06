const form = document.querySelector(".form");
// console.log(form);
const randomNum = Math.trunc(Math.random() * 100 + 1);
console.log(randomNum);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const guessNum = parseInt(document.querySelector("#guessField").value);
  const lowHigh = document.querySelector(".lowOrHi");
  const prevGuess = document.querySelector(".guesses");
  const remainGuess = document.querySelector(".lastResult");
  //   console.log(guessNum);

  if (
    guessNum !== "" &&
    guessNum >= 0 &&
    guessNum <= 100 &&
    !isNaN(guessNum) &&
    remainGuess.innerHTML > 0
  ) {
    // console.log(
    //   guessNum,
    //   remainGuess.innerHTML,
    //   lowHigh.innerHTML,
    //   prevGuess.innerHTML
    // );
    prevGuess.innerHTML = guessNum;
    remainGuess.innerHTML -= 1;
    if (guessNum === randomNum) {
      lowHigh.innerHTML = `<span>YOU WON !!! </span>`;
      lowHigh.style.color = "#55FF55";
    } else if (guessNum > randomNum) {
      lowHigh.innerHTML = `LOWER !! 👇🏻`;
    } else if (guessNum < randomNum) {
      lowHigh.innerHTML = `HIGHER !! 👆🏻`;
    }
  } else if (!(remainGuess.innerHTML > 0)) {
    lowHigh.innerHTML = `YOU LOST`;
    lowHigh.style.color = "#FF5555";
  } else {
    // console.log(guessNum, remainGuess);

    lowHigh.innerHTML = `INVALID INPUT`;
  }
});
