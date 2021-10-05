/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randSet = randElement(["♦", "♥", "♠", "♣"]);
  let randNum = randElement([
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]);
  let randColor = Math.random() >= 0.5 ? "black" : "red";

  let H2s = document.querySelectorAll("h2");
  H2s.forEach(H2 => {
    H2.innerHTML = randSet;
    H2.style.color = randColor;
  });

  let cardTitle = document.querySelector(".card-title");
  cardTitle.innerHTML = randNum;
  cardTitle.style.color = "black";
};

const randElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};
