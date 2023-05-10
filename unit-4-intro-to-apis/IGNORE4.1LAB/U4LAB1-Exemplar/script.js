console.log(cards.length)

/** Returns corresponding number for each face card */
const convertValue = (value) => {
  let convertedValue;
  const faceCardValue = {
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 1,
  };

  if (Object.keys(faceCardValue).includes(value)) {
    convertedValue = faceCardValue[value];
  } else {
    convertedValue = Number(value);
  }
  return convertedValue;
};

/** 1. draw a new random card, and return its value */ 
const nextCard = async() => {
  let card = await drawCard(deckId, deckName);

  $pile.innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;

  return convertValue(card.value);
}

/** 2. start a new game */ 
const startGame = async () => {
  // retrieve new deck & set deck ID
  deckId = await getNewDeck();

  // deal all cards into a pile
  const cards = await dealCards(deckId, 52);
  const cardCodes = cards.map(cardObj=>cardObj.code)
  addToPile(deckId, deckName, cardCodes);
  
  // flip first card
  currentValue = await nextCard();
} 

/**  3. draw a card and see if the selected guess was right */
const handleClick = async (e) => {
  let userGuess = e.target.id;
  let result = null;
  let newCardValue;
  $pile.classList.remove("correct");

  // one way to handle ties. - draw a card
  while (!result) {
    newCardValue = await nextCard();

    if (newCardValue > currentValue) {
      result = "higher";
    } else if (currentValue > newCardValue) {
      result = "lower";
    }
  }

  currentValue = newCardValue;
  
  if( userGuess === result) {
    //increment point
    const $scoreCount = document.querySelector("#scoreCount");
    officialScore += 1;
    $scoreCount.innerHTML = officialScore;

    //glow card
    $pile.classList.add("correct");
  }
}


/** main code */
const $buttons = document.querySelectorAll(".button");
const $pile = document.querySelector("#draw");

let currentValue
let deckId;
let officialScore = 0;
const deckName = "mainPile";
startGame();

$buttons.forEach(button => button.addEventListener('click', handleClick));