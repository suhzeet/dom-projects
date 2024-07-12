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
