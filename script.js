//Demo
let cards = [];
let sum = 0;
let isBlackJack = false;
let isAlive = false;
let message = "";

// alert(sum);
let cardsEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById('player-el');
let player ={
  name: 'Per',
  chip: 190
};
playerEl.textContent = `${player.name} $${player.chip}`
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("new-card").addEventListener("click", newCard);

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Card:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  // cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
  // cardsEl.textContent = `Card: ${firstCard} ${secondCard}`
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Whoow! you have got a blackJack";
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  // alert(message)
  messageEl.textContent = message;
}
function newCard() {
  // alert(`Drawing a new card from the store`);
  if (isAlive === true && isBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  return randomNum;
}
let storeCard = getRandomCard();
console.log(storeCard);
function rollDice() {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}
console.log(getRandomCard());
