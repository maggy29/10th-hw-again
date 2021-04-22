import './styles.css';
import itemTmpl from './menuItemTmpl.hbs';
import menu from './menu.json';

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
  themeCheck: document.querySelector('.js-theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markup = menu.reduce((acc, item) => (acc += itemTmpl(item)), '');
refs.menu.insertAdjacentHTML('afterbegin', markup);

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.body.classList.add(localStorage.getItem('theme'));
  refs.themeCheck.checked = true;
}

refs.themeCheck.addEventListener('change', e => {
  const DarkTheme = refs.body.classList.value;
  if (!DarkTheme) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс
//#theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения
//темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked
//у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

// Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть
//в исходном HTML.
