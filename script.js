const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerHTML = "";
    } else if (item.id == "backspace") {
      let string = display.innerHTML.toString();
      display.innerHTML = string.substring(0, string.length - 1);
    } else if (display.innerHTML != "" && item.id == "equal") {
      display.innerHTML = eval(display.innerHTML);
    } else if (display.innerHTML == "" && item.id == "equal") {
      display.innerHTML = "Empty!";
      setTimeout(() => (display.innerHTML = ""), 2000);
    } else {
      display.innerHTML += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
