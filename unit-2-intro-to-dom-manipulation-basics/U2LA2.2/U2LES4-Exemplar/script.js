// YOUR CODE HERE
console.log("Script Running.");

// Connect switch to light square
const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");
const switch3 = document.querySelector("#switch3");

const changeLight1 = (e) => {
  const lightbulb1 = document.querySelector("#lightbulb1");

  if (lightbulb1.classList.contains("active")) {
    lightbulb1.classList.remove("active");
  } else {
    lightbulb1.classList.add("active");
  }
};
const changeLight2 = (e) => {
  const lightbulb2 = document.querySelector("#lightbulb2");

  if (lightbulb2.classList.contains("active")) {
    lightbulb2.classList.remove("active");
  } else {
    lightbulb2.classList.add("active");
  }
};
const changeLight3 = (e) => {
  const lightbulb3 = document.querySelector("#lightbulb3");

  if (lightbulb3.classList.contains("active")) {
    lightbulb3.classList.remove("active");
  } else {
    lightbulb3.classList.add("active");
  }
};

switch1.addEventListener("change", changeLight1);
switch2.addEventListener("change", changeLight2);
switch3.addEventListener("change", changeLight3);

// Toggle instead of add remove condition
const changeLight1b = (e) => {
  const lightbulb1 = document.querySelector("#lightbulb1");

  lightbulb1.classList.toggle("active");
};
const changeLight2b = (e) => {
  const lightbulb2 = document.querySelector("#lightbulb2");

  lightbulb2.classList.toggle("active");
};
const changeLight3b = (e) => {
  const lightbulb3 = document.querySelector("#lightbulb3");

  lightbulb3.classList.toggle("active");
};

// 1 changeLight function instead of 3 using e.target.value
const changeLight = (e) => {
  const lightbulb = document.querySelector("#" + e.target.value);

  lightbulb.classList.toggle("active");
};

// Connect main power switch (kill all lights, disable buttons vs activate buttons )
const main = document.querySelector("#main");

const deactivate = (s) => {
  s.disabled = true;
  const lightbulb = document.querySelector('#' + s.value);
  lightbulb.classList.remove('active');
};
const activate = (s) => {
  s.disabled = false;
  const lightbulb = document.querySelector('#' + s.value); 
  if(s.checked) {
    lightbulb.classList.add('active');
  }
}

const switchPower = () => {
  //check "checked" - toggle all lights on/off
  if(main.checked) {
    //lights on, enable buttons
    activate(switch1);
    activate(switch2);
    activate(switch3);
  } else {
    //lights off, disable buttons
    deactivate(switch1);
    deactivate(switch2);
    deactivate(switch3);
  }
};

main.addEventListener("change", switchPower);
