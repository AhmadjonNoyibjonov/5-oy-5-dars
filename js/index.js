const check = document.querySelector(".check #check");
const darcMode = document.querySelector("section .block_darkmode .dark_mode");
const lightMode = document.querySelector(
  "section .block_lightmode .light_mode"
);

const select1 = document.querySelector(".select .england");
const select2 = document.querySelector(".select .russian");
const select3 = document.querySelector(".select .uzbek");
const h3Text = document.querySelectorAll(".title h3");
const pText = document.querySelectorAll(".title p");
const buttonText = document.querySelectorAll(".title button");

check.onclick = mode;
function mode() {
  if (check.checked) {
    darcMode.style.display = "none";
    lightMode.style.display = "flex";
  } else {
    darcMode.style.display = "flex";
    lightMode.style.display = "none";
  }
}

select2.onclick = language;

function language() {
  if(select2.click) {
    h3Text[0].innerHTML = "Раскройте силу творчества c Figma!";
    pText[0].innerHTML = "Готовы улучшить свою дизайнерскую игру?";
    buttonText[0].innerHTML = "Попробуйте Фигму прямо сейчас";
    h3Text[1].innerHTML = "Раскройте силу творчества c Figma!";
    pText[1].innerHTML = "Готовы улучшить свою дизайнерскую игру?";
    buttonText[1].innerHTML = "Попробуйте Фигму прямо сейчас";
  }
}