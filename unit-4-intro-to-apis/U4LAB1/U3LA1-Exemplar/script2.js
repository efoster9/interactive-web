//Higher Lower
/** Requests data from API and sends it via functions */
const SAMPLE_ID = randomId();

const pileStatus = {}

// creates new deck - returns deck_id
const getNewDeck = () => {
  const endpoint = "https://deckofcardsapi.com/api/deck/new";
  const sampleResponse = {
    success: true,
    deck_id: SAMPLE_ID,
    remaining: 52,
    shuffled: false,
  };

  return sampleResponse;
};

// returns all cards to main deck and shuffles
const shuffleDeck = (deckID) => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/shuffle`;
  const sampleResponse = {
    success: true,
    deck_id: SAMPLE_ID,
    remaining: 52,
    shuffled: true,
  };

  return sampleResponse;
};

// returns all cards to main deck and shuffles
let requests = 0;
const dealCards = (deckID, count) => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`;
  let sampleResponse = {};

  if (requests < 2) {
    sampleResponse = {
      success: true,
      deck_id: SAMPLE_ID,
      cards: draws[requests],
      remaining: 26,
    };
    requests++;
  } else {
    sampleResponse = {
      success: false,
      deck_id: SAMPLE_ID,
      cards: [],
      remaining: 0,
      error: "Not enough cards remaining to draw 26 additional",
    };
  }

  return sampleResponse;
};

// creates new pile - returns deck_id
const addPile = (deckID, pileName, cardsArray) => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${pileName}/add?cards=${cardsArray.join()}`;

  if (!Object.keys(pileStatus).includes(pileName)) {
    pileStatus[pileName] = 0;
  }
  pileStatus[pileName] += cardsArray.length;

  let sampleResponse = {
    success: true,
    deck_id: SAMPLE_ID,
    remaining: -26*(Object.keys(pileStatus)).length + 52,
    piles: {},
  };

  Object.keys(pileStatus).forEach((pileName) => {
    sampleResponse.piles[pileName] = {
      remaining: pileStatus[pileName],
    };
  });

  return sampleResponse;
};

// returns all cards to main deck and shuffles

const drawOne = (deckID, pileName) => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${pileName}/draw/`;
  const sampleResponse = {
    success: true,
    deck_id: SAMPLE_ID,
    cards: [],
    piles: {},
  };

  Object.keys(pileStatus).forEach(pileName => {
    sampleResponse.piles[pileName] = {
      remaining: pileStatus[pileName],
    }
  });

  if (Object.keys(pileStatus).includes(pileName)) {
    sampleResponse.cards = flip[Object.keys(pileStatus).indexOf(pileName)];
  }

  return sampleResponse;
};

// returns all cards to main deck and shuffles
const shufflePile = (deckID, pileName) => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${pileName}/shuffle`;
  const sampleResponse = {
    success: true,
    deck_id: SAMPLE_ID,
    remaining: 0,
    piles: {},
  };

  Object.keys(pileStatus).forEach((name) => {
    sampleResponse.piles[name] = {
      remaining: 26,
    };
  });

  return sampleResponse;
};

