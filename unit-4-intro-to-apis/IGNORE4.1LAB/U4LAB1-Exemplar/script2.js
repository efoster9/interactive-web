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

/************************* Your Code Here *********************************/

/** 2. draw a new random card, and return its value */ 
const nextCard = async() => {
  let cardArr = await dealCards(deckId, 1);
  console.log(cardArr)

  $pile.innerHTML = `<img src="${cardArr[0].image}" alt="${cardArr[0].value} of ${cardArr[0].suit}">`;

  return convertValue(cardArr[0].value);
}

/** 1. start a new game */ 
const startGame = async () => {
  // retrieve new deck & set deck ID
  deckId = await getNewDeck();
  
  // flip first card
  currentValue = await nextCard()
} 

/*************************************************************************/

/** main code */
const $buttons = document.querySelectorAll(".button");  // The lower and higher buttons
const $pile = document.querySelector("#draw");          // The face up card

let deckId;                   // API's ID for your deck
let officialScore = 0;        // # of correct guesses
let currentValue;             // Value of the current face up card
const deckName = "mainPile";  // 

startGame();

// For either button, draw a card and see if the selected button guess was right
$buttons.forEach((button) =>
  button.addEventListener("click", async (e) => {
    let userGuess = e.target.id;        // selected guess (higher or lower)
    let answer = null;                  // the actual correct answer (higher or lower)
    let newCardValue;                   // the newly flipped card. 

    // ".correct" class applies green halo on card
    $pile.classList.remove("correct");

    // If there's a tie, draw another card. Otherwise, set answer
    while (!answer) {
      newCardValue = await nextCard();

      if (newCardValue > currentValue) {
        answer = "higher";
      } else if (currentValue > newCardValue) {
        answer = "lower";
      }
    }

    // 
    if (userGuess === answer) {
      //increment point
      const $scoreCount = document.querySelector("#scoreCount");
      officialScore += 1;
      $scoreCount.innerHTML = officialScore;

      //glow card
      $pile.classList.add("correct");
    }

    currentValue = newCardValue;
  })
);
