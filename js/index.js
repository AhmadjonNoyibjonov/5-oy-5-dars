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
const button1 = document.querySelector(".header_buttons .head_button1");
const button2 = document.querySelector(".header_buttons .head_button2");
const button3 = document.querySelector(".header_buttons .head_button3");
const h4 = document.querySelectorAll(".header h4");

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

button2.addEventListener("click", function () {
  h3Text[0].textContent = "Раскройте силу творчества c Figma!";
  pText[0].textContent = "Готовы улучшить свою дизайнерскую игру?";
  buttonText[0].textContent = "Попробуйте Фигму";
  h3Text[1].textContent = "Раскройте силу творчества c Figma!";
  pText[1].textContent = "Готовы улучшить свою дизайнерскую игру?";
  buttonText[1].textContent = "Попробуйте Фигму";

  h3Text[0].style.fontFamily = "Inter";
  pText[0].style.fontFamily = "Inter";
  buttonText[0].style.fontFamily = "Inter";

  h3Text[1].style.fontFamily = "Inter";
  pText[1].style.fontFamily = "Inter";
  buttonText[1].style.fontFamily = "Inter";

  h4[0].textContent = "ТЕМНЫЙ";
  h4[1].textContent = "СВЕТОВОЙ";
  h4[0].style.fontFamily = "Inter";
  h4[1].style.fontFamily = "Inter";
});

button3.addEventListener("click", function () {
  h3Text[0].textContent = "Figma bilan ijodkorlik kuchini oching!";
  pText[0].textContent = "Dizayn o'yiningizni oshirishga tayyormisiz?";
  buttonText[0].textContent = "Figmani sinab ko'ring";
  h3Text[1].textContent = "Figma bilan ijodkorlik kuchini oching!";
  pText[1].textContent = "Dizayn o'yiningizni oshirishga tayyormisiz?";
  buttonText[1].textContent = "Figmani sinab ko'ring";

  h3Text[0].style.fontFamily = "Inter";
  pText[0].style.fontFamily = "Inter";
  buttonText[0].style.fontFamily = "Inter";

  h3Text[1].style.fontFamily = "Inter";
  pText[1].style.fontFamily = "Inter";
  buttonText[1].style.fontFamily = "Inter";

  h4[0].textContent = "Qora rejim";
  h4[1].textContent = "Yoruq rejim";
  h4[0].style.fontFamily = "Inter";
  h4[1].style.fontFamily = "Inter";
});

button1.addEventListener("click", function () {
  h3Text[0].textContent = "Unlock the Power of Creativity with Figma!";
  pText[0].textContent = "Ready to elevate your design game?";
  buttonText[0].textContent = "Try Figma now";
  h3Text[1].textContent = "Unlock the Power of Creativity with Figma!";
  pText[1].textContent = "Ready to elevate your design game?";
  buttonText[1].textContent = "Try Figma now";

  h3Text[0].style.fontFamily = "Inter";
  pText[0].style.fontFamily = "Inter";
  buttonText[0].style.fontFamily = "Inter";

  h3Text[1].style.fontFamily = "Inter";
  pText[1].style.fontFamily = "Inter";
  buttonText[1].style.fontFamily = "Inter";

  h4[0].textContent = "DARK MODE";
  h4[1].textContent = "LIGHT MODE";
  h4[0].style.fontFamily = "Inter";
  h4[1].style.fontFamily = "Inter";
});
