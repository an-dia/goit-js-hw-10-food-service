import menuCardsTpl from './templates/menu-card.hbs';
import menuMarkup from './menu.json';
import { refs } from './refs'
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const createMenuCardsMarkup = menuCardsTpl(menuMarkup)

refs.menuList.insertAdjacentHTML('beforeend', createMenuCardsMarkup);
refs.input.addEventListener('change', onClickCheckbox)
addLocalStorageTheme();

function onClickCheckbox(e) {
  console.log(e.currentTarget.checked)
  let value = e.currentTarget.checked;

  if (value === true) {
    refs.body.classList.add(Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)

    localStorage.setItem('theme', Theme.DARK)
  }
  else {
    refs.body.classList.remove(Theme.DARK)
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT)

  }
}

function addLocalStorageTheme() {
   const valueLocalStorage = localStorage.getItem('theme')
  if (valueLocalStorage ) {
    refs.body.classList.add(Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
    refs.input.checked = true
     
  }      
  
  if (valueLocalStorage === Theme.LIGHT) {
    localStorage.removeItem('theme')
    refs.body.classList.add(Theme.LIGHT)
    refs.body.classList.remove(Theme.DARK)
    refs.input.checked = false
  }
}
