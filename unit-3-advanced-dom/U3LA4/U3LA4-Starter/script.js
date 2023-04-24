// All of the selectors we need
const controls = document.querySelectorAll(".control");
const loader = document.querySelector("#loader");
const inputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  dropDown: document.querySelector("#dropDown"),
}

// Shows the loading button
let timerID;
const spinLoader = () => {
  loader.classList.add("is-loading");
  timerID && clearTimeout(timerID);
  timerID = setTimeout( ()=>{
    loader.classList.remove("is-loading");
  }, 2000);
};



    // 3. Restoring inputs from local storage if there are any
Object.keys(localStorage).forEach(key => {
  if( key in inputs ){
    inputs[key].value = localStorage.getItem(key);
  }
})

    // 2. To save the changes, spin loader, save input to localStorage
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

    // 1. for all the controls save the changes
controls.forEach( input => input.addEventListener('input', saveChanges));
