const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
let cardChosen = [];
let cardsChosenIds = [];
const gridDisplay = document.getElementById("grid");
const cardsWon = [];
const resultDisplay = document.querySelector("#result");
const scoreText = document.querySelector("#score");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  console.log(cardChosen);
  if (cardsChosenIds[0] == cardsChosenIds[1]) {
    alert("Oops! Clicked on same image twice");
    cards[cardsChosenIds[0]].setAttribute("src", "./images/blank.png");
    return;
  }
  if (cardChosen[0] == cardChosen[1]) {
    cards[cardsChosenIds[0]].setAttribute("src", "./images/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "./images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[cardsChosenIds[0]].setAttribute("src", "./images/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "./images/blank.png");
  }
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardsChosenIds = [];
  if (cardsWon.length == cardArray.length / 2) {
    scoreText.innerHTML = "";
    resultDisplay.innerHTML =
      "<span style='font-size:30px;color:red;'>Congratulations!! found 'em all</span>";
  }
}
