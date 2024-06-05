//RANDOM NUMBER GENERATOR

let randomNum;

const myButton = document.getElementById("my-button");
const myLabel = document.getElementById("my-label");

const min = 1;
const max = 6;

myButton.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  myLabel.textContent = randomNum;
};
