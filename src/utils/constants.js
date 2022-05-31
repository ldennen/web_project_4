import { escapePopup } from '../../src/pages/index.js';

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keyup', escapePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keyup', escapePopup);
}

export { openPopup, closePopup };