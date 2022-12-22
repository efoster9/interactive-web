// YOUR CODE HERE
console.log("Script Running.");

const switchLightbulb = (id) => {
  document.querySelector(id).classList.toggle("active");
};

const change38 = () => {
  switchLightbulb("#lightbulb3");
  switchLightbulb("#lightbulb8");
};
const change17 = () => {
  switchLightbulb("#lightbulb1");
  switchLightbulb("#lightbulb7");
};
const change468 = () => {
  switchLightbulb("#lightbulb4");
  switchLightbulb("#lightbulb6");
  switchLightbulb("#lightbulb8");
};
const change29 = () => {
  switchLightbulb("#lightbulb2");
  switchLightbulb("#lightbulb9");
};
const change5 = () => {
  switchLightbulb("#lightbulb5");
}
const change14 = () => {
  switchLightbulb("#lightbulb1");
  switchLightbulb("#lightbulb4");
};
const change23 = () => {
  switchLightbulb("#lightbulb2");
  switchLightbulb("#lightbulb3");
};
const change59 = () => {
  switchLightbulb("#lightbulb5");
  switchLightbulb("#lightbulb9");
};
const change67 = () => {
  switchLightbulb("#lightbulb6");
  switchLightbulb("#lightbulb7");
};


document.querySelector("#switch1").addEventListener("change", change38);
document.querySelector("#switch2").addEventListener("change", change17);
document.querySelector("#switch3").addEventListener("change", change468);
document.querySelector("#switch4").addEventListener("change", change29);
document.querySelector("#switch5").addEventListener("change", change5);
document.querySelector("#switch6").addEventListener("change", change14);
document.querySelector("#switch7").addEventListener("change", change23);
document.querySelector("#switch8").addEventListener("change", change59);
document.querySelector("#switch9").addEventListener("change", change67);


// Solution: turn on lights: 2, 3, 7, and 8... OR all other lights but these (1, 4, 5, 6, and 9)