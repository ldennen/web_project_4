import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from './utils.js';

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

//Text content
const profileNameEl = document.querySelector('.profile__info-name');
const profileAbtEl = document.querySelector('.profile__info-about-me');
const imgPopupTitle = document.querySelector('.popup__title');

//Wrappers
const popupEl = document.querySelector('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const previewImgPopup = document.querySelector('.popup_type_preview');
const editFormEl = document.querySelector('.edit-form');
const addFormEl = addPopup.querySelector('.edit-form');
const elementsList = document.querySelector('.elements__container');
const previewImgEl = document.querySelector('.popup__preview-image');
const overlayEl = Array.from(document.querySelectorAll('.popup'));

//Buttons
const editInfoBtn = document.querySelector('.button_location_info');
const editPopupCloseBtn = editPopup.querySelector('.button_location_close');
const addPopupCloseBtn = addPopup.querySelector('.button_location_close');
const previewImgCloseBtn = previewImgPopup.querySelector('.button_location_close');
const addImgBtn = document.querySelector('.button_location_add-photo');
const addFormSubmitButton = addFormEl.querySelector('.button_location_submit')

//Inputs
const editFormNameInput = document.querySelector('.edit-form__input_location_name');
const editFormAbtInput = document.querySelector('.edit-form__input_location_about-me');
const addFormTitleInput = document.querySelector('.edit-form__input_type_title');
const addFormLinkInput = document.querySelector('.edit-form__input_type_link');

//Validation 

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editFormValidator = new FormValidator(validationSettings, editFormEl);
const addFormValidator = new FormValidator(validationSettings, addFormEl);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Templates
const cardSelector = '#card-template';

//Add new card
const renderCard = (data, wrap) => {
  const card = new Card(data, cardSelector);
  wrap.prepend(card.getView());
};

//Generate and add cards
initialCards.forEach((card) => {
  renderCard(card, elementsList);
});

//Close popup methods
overlayEl.forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    closePopup(event.target);
  });
});

function escapePopup(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  };
};

//Event Listeners
editInfoBtn.addEventListener('click', () => openPopup(editPopup));
editPopupCloseBtn.addEventListener('click', () => closePopup(editPopup));
addImgBtn.addEventListener('click', () => {
  addFormValidator.resetValidation();
  openPopup(addPopup);
});
addPopupCloseBtn.addEventListener('click', () => closePopup(addPopup));
previewImgCloseBtn.addEventListener('click', () => closePopup(previewImgPopup));

//Forms
editFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
  closePopup(editPopup);
});

addFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const card = {};
  card.name = addFormTitleInput.value;
  card.link = addFormLinkInput.value;
  renderCard(card, elementsList);
  closePopup(addPopup);
  addFormEl.reset();
});

export { escapePopup, imgPopupTitle, previewImgEl, previewImgPopup };