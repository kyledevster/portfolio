const darkModeLabel = document.querySelector('#dark-mode-label');
const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
const htmlElement = document.documentElement;

if(localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
  darkModeCheckbox.checked = true;
}

darkModeLabel.addEventListener('click',(e)=>{
  if(darkModeCheckbox.checked === true) {
    darkModeCheckbox.checked = false;
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme','light')
  } else if(darkModeCheckbox.checked === false) {
    darkModeCheckbox.checked = true;
    htmlElement.classList.add('dark');
    localStorage.setItem('theme','dark')
  }
})