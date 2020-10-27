//При импорте шаблонов мы получаем функцию-шаблон готовую
//принимать данные и возвращать строку разметки
import menuCardsTpl from './templates/menu-card.hbs';
import menuMarkup from './menu.json';
import './styles.css';
// console.log(menuCardsTpl)

const refs = {
  menuList: document.querySelector('.js-menu'),
  input: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


// const menuCardsMarkup = createMenuCard(menuMarkup);
const createMenuCardsMarkup = menuCardsTpl(menuMarkup)

refs.menuList.insertAdjacentHTML('beforeend', createMenuCardsMarkup);
refs.input.addEventListener('change', onClickCheckbox)
addLocalStorageTheme(); 

// function createMenuCard(menuMarkup) {
// // return menuMarkup.map(menu => menuCard(menu)).join('');
// //menuCardsTpl под капотом колбек функция, туда приходит menu
//   // return menuMarkup.map(menuCardsTpl).join('');

//   return menuCardsTpl(menuMarkup)
// }



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
