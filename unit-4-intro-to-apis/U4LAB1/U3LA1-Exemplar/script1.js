/** connects sample data to website */
const drawButton = document.querySelector("#draw");
const continueButton = document.querySelector("#continue");
let winner = null;
const drawnCards = [];

const faceCardValue = {
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

const user = {
  pileName: "",
  cardCount: 0,
  cardObj: null,
  cardValue: null,
  displayCardSpan: document.querySelector("#user-draw"),
};

const computer = {
  pileName: "",
  cardCount: 0,
  cardObj: null,
  cardValue: null,
  displayCardSpan: document.querySelector("#computer-draw"),
};

const updateCardCount = () => {
  const userCountSpan = document.querySelector("#user-count");
  const computerCountSpan = document.querySelector("#computer-count");

  userCountSpan.innerHTML = user.cardCount;
  computerCountSpan.innerHTML = computer.cardCount;
};

/** Set up decks - deal twice */
// create new deck and remember ID
let deckResponse = getNewDeck();
console.log(deckResponse);

let deckID = deckResponse.deck_id;
console.log(deckResponse.deck_id);

// shuffle deck
console.log(shuffleDeck(deckID));

// deal out cards
const dealTo = (pileName) => {
  cardsResponse = dealCards(deckID, 26);
  console.log(cardsResponse);
  console.log(cardsResponse.cards);

  let cardCodes = cardsResponse.cards.map((card) => card.code);
  console.log(cardCodes);

  let addPileResponse = addPile(deckID, pileName, cardCodes);
  console.log(addPileResponse);

  return addPileResponse.piles.userPile.remaining;
};
user.pileName = "userPile";
user.cardCount = dealTo(user.pileName);

computer.pileName = "computerPile";
computer.cardCount = dealTo(computer.pileName);

updateCardCount();

/** Set up "Draw" button */
// when clicked, flip each card and highlight the higher value
// set round winner

const drawACard = (currentUser) => {
  currentUser.cardObj = drawOne(deckID, currentUser.pileName);
  currentUser.cardCount =
    currentUser.cardObj.piles[currentUser.pileName].remaining;

  const cardCode = currentUser.cardObj.cards[0].code;
  const imgLink = `https://deckofcardsapi.com/static/img/${cardCode}.png`;
  currentUser.displayCardSpan.innerHTML = `<img src="${imgLink}" alt="Back of card deck">`;

  currentUser.value = currentUser.cardObj.cards[0].value;
  if (Object.keys(faceCardValue).includes(currentUser.value)) {
    currentUser.value = faceCardValue[currentUser.value];
  }

  return cardCode;
};

drawButton.addEventListener("click", () => {
  drawnCards.push(drawACard(user));
  drawnCards.push(drawACard(computer));

  if (user.value > computer.value) {
    winner = user;
  } else if (computer.value > user.value) {
    winner = computer;
  }

  if (winner) {
    winner.isWinner = true;
    winner.displayCardSpan.classList.add("winner");
  }

  updateCardCount();
  drawButton.disabled = true;
  continueButton.disabled = false;
});

// Set up "Continue" button
// when clicked, give cards to round winner
continueButton.addEventListener("click", () => {
  addPile(deckID, winner.pileName, drawnCards);
  updateCardCount();
  winner = null;
  drawnCards = [];
  drawButton.disabled = false;
  continueButton.disabled = true;
});

// if there's no round winner (tie)
// return cards and shuffle
