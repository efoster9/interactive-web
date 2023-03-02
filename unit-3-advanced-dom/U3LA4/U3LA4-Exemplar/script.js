const controls = document.querySelectorAll(".control");
const loader = document.querySelector("#loader");
const inputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  dropDown: document.querySelector("#dropDown"),
}
const reset = document.querySelector("#reset");

let timerID;
const spinLoader = () => {
  loader.classList.add("is-loading");
  timerID && clearTimeout(timerID);
  timerID = setTimeout( ()=>{
    loader.classList.remove("is-loading");
  }, 2000);
};

// Restoring local storage
Object.keys(localStorage).forEach(key => {
  if( key in inputs ){
    inputs[key].value = localStorage.getItem(key);
  }
})


const saveChanges = (e) => {
  spinLoader();

  // start
  const inputValue = e.target.value;

  if( inputValue && inputValue !== '- Select -' ) {
    localStorage.setItem(e.target.id, e.target.value);
  } else {
    localStorage.removeItem(e.target.id);
  }
  //end
  
}

controls.forEach( input => input.addEventListener('input', saveChanges));

reset.addEventListener('click', ()=>{
  spinLoader();
  
  localStorage.clear();
  Object.values(inputs).forEach(input => {
    input.value = '';
  })
  inputs.dropDown.value = '- Select -';
});