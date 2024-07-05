const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (chai) => {
    console.log(chai);
    console.log(chai.target);
    switch (chai.target.id) {
      case chai.target.id:
        body.style.backgroundColor = chai.target.id;
        break;
    }
  });
});
