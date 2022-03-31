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

//Wrappers
const popupEl = document.querySelector('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const editFormEl = document.querySelector('.edit-form');
const elementsList = document.querySelector('.elements__container')

//Buttons
const editInfoBtn = document.querySelector('.button_location_info');
const editPopupCloseBtn = editPopup.querySelector('.button_location_close');
const addPopupCloseBtn = addPopup.querySelector('.button_location_close');
const addImgBtn = document.querySelector('.button_location_add-photo');

//Inputs
const editFormNameInput = document.querySelector('.edit-form__input_location_name');
const editFormAbtInput = document.querySelector('.edit-form__input_location_about-me');

//Templates
const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.elements__card');

//Functions
function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  cardEl.querySelector('.elements__card-title').textContent = card.name;
  cardEl.querySelector('.elements__card-image').setAttribute("src", card.link);
  return cardEl;
}

function renderCard(card, container) {
  container.append(card);
}

function closePopup() {
  popupEl.classList.remove('popup_open');
}

//function togglePopup() {
//  if (!popupEl.classList.contains('popup_open')) {
//    editFormNameInput.value = profileNameEl.textContent;
//    editFormAbtInput.value = profileAbtEl.textContent;
//  }
//
//  popupEl.classList.toggle('popup_open');
//}

function togglePopup(popup) {
  popup.classList.toggle('popup_open');
}

//Event Listeners
editInfoBtn.addEventListener('click', () => togglePopup(editPopup));
editPopupCloseBtn.addEventListener('click', () => togglePopup(editPopup));
addImgBtn.addEventListener('click', () => togglePopup(addPopup));
addPopupCloseBtn.addEventListener('click', () => togglePopup(addPopup));


editFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
  closePopup();
});



initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, elementsList);
});
