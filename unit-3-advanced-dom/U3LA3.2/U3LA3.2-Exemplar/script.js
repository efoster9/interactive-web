const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () => {
  // fix this
  const greatGrandParentDiv = null;

  greatGrandParentDiv.style.background = darkMode.checked ? 'black' : 'white';
  
});