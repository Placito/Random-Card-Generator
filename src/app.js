/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = generateCard();
  });
};

// generate random Numbers
let generateRandomNumber = () => {
  let numbers = [
    "A",
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
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

// generate random simbols for the cards
let generateRandomSimbol = () => {
  let simbols = ["♦", "♥", "♠", "♣"];
  let indexSimbols = Math.floor(Math.random() * simbols.length);
  return simbols[indexSimbols];
};

// create a card element and than delete the previous one
let generateCard = () => {
  // create
  let card = document.createElement("div");
  card.classList.add("card");

  let newSimbol = generateRandomSimbol();
  let color = "black";
  if (newSimbol == "♥" || newSimbol == "♦") {
    color = "red";
  }

  //using the input's values to create a new card
  let inputHeight = document.querySelector("#height").value;
  let inputWidth = document.querySelector("#width").value;

  let newHeight = parseInt(inputHeight);
  let newWidth = parseInt(inputWidth);

  card.style.height = `${newHeight}px`;
  card.style.width = `${newWidth}px`;

  card.innerHTML =
    `<span class="${color} top-suit">` +
    newSimbol +
    "</span>" +
    '<span class="number">' +
    generateRandomNumber() +
    "</span>" +
    `<span class="${color} bottom-suit">` +
    newSimbol +
    "</span>";
  document.body.appendChild(card);

  // delete

  let element = document.querySelector(".card");
  element.parentNode.removeChild(element);
};
