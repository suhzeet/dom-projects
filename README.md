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
