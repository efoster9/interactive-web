// YOUR CODE HERE

// Part 1 - Radio Buttons - qS, ifelse, innerHTML
const randomNumber = getRandomInt();
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
  const color = e.target.value;
  console.log("color", color);
  let emoji = "";

  if(color === "blue") {
    emoji = " 💙";
  } else if(color === "green") {
    emoji = " 💚";
  } else if(color === "pink") {
    emoji = " 💕";
  } else if(color === "black") {
    emoji = " 🖤";
  }

  radioOutput.innerHTML = "You picked " + color + emoji;
}

radioInput.addEventListener('change', displayColor);


// Part 2 - Guess the Number - qS, nested If, innerHTML, valueAsNumber
const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
  const value = e.target.valueAsNumber;
  console.log("number", value, "answer", randomNumber);

  if( value != randomNumber) {
    if( value > randomNumber){
      numOutput.innerHTML = "Not " + value + ", Guess Lower";
    } else {
      numOutput.innerHTML = "Not " + value + ", Guess Higher";
    }
  } else {
    numOutput.innerHTML = "Hurray! You got it! It's " + randomNumber;
  }
}

numInput.addEventListener('change', checkNumber)


// Part 3 - 7 continents - qS, toLower, elseif, .remove()
const textInput = document.querySelector("#text-input");
let count = 0;

const checkContinent = (e) => {
  const guess = e.target.value.toLowerCase();
  console.log("guess", guess);
  let img;

  if(guess === "north america") {
    img = document.querySelector("#north-america");
  } else if(guess === "south america") {
    img = document.querySelector("#south-america");
  } else if(guess === "antarctica") {
    img = document.querySelector("#antarctica");
  } else if(guess === "europe") {
    img = document.querySelector("#europe");
  } else if(guess === "africa") {
    img = document.querySelector("#africa");
  } else if(guess === "australia") {
    img = document.querySelector("#australia");
  } else if(guess === "asia") {
    img = document.querySelector("#asia");
  } else {
    return 0;
  }

  img.classList.remove("hidden");
}

textInput.addEventListener('change', checkContinent);


// [Extension] Part 4 - Change the background color
// use is_dark(#07f3a1), for example to check if a color is "dark"
const colorInput = document.querySelector("#color");
const checkbox = document.querySelector("#human");
const submitButton = document.querySelector("#submit");
const body = document.querySelector("body");

const changeBackground = (e) => {
  e.preventDefault();
  console.log("color", colorInput.value);
  console.log("is_checked", checkbox.checked);

  if(checkbox.checked) {
    body.style.background = colorInput.value;
    if(is_dark(colorInput.value)) {
      body.style.color = 'white';
    } else {
      body.style.color = 'black';
    }
    checkbox.checked = false;
  }
}

submitButton.addEventListener('click', changeBackground);