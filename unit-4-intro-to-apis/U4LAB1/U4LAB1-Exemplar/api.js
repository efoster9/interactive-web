//Higher Lower
/** Requests data from API and sends it via functions */
const BASE_URL = "https://deckofcardsapi.com/api/deck";

// creates new shuffled deck - returns deckId
const getNewDeck = async () => {
  const endpoint = `${BASE_URL}/new/shuffle/`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return await data.deck_id;
};

//deals out how ever many cards you need
const dealCards = async (deckID, count) => {
  const endpoint = `${BASE_URL}/${deckID}/draw/?count=${count}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return await data.cards;
};

// creates new pile with added cards or adds to existing pile (no return)
const addToPile = async (deckID, pileName, cardsArray) => {
  const endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/add/?cards=${cardsArray.join()}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data.success ? `Added cards to ${pileName}` : "Failed to add cards");
};

// pulls new card from pile
const drawCard = async (deckID, pileName) => {
  const endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/draw/random`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return await data.cards[0];
};

// //shuffles deck
// const shuffle = async (deckId, pileName) => {
//   const endpoint = `${BASE_URL}/${deckId}/pile/${pileName}/shuffle/`;
//   const response = await fetch(endpoint);
//   const data = await response.json();

//   console.log(data.success ? `Shuffled ${pileName}` : "Failed to shuffle");
// };

