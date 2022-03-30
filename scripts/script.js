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

const profileNameEl = document.querySelector('.profile__info-name');
const profileAbtEl = document.querySelector('.profile__info-about-me');

//Wrappers
const popupEl = document.querySelector('.popup');
const editFormEl = document.querySelector('.edit-form');
const elementsList = document.querySelector('.elements__container')

//Buttons
const editInfoBtn = document.querySelector('.button_location_info');
const closeBtnEl = document.querySelector('.button_location_close');

//Inputs
const editFormNameInput = document.querySelector('.edit-form__input_location_name');
const editFormAbtInput = document.querySelector('.edit-form__input_location_about-me');

//Templates
const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.elements__card');

function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  cardEl.querySelector('.elements__card-title').textContent = card.name;
  cardEl.querySelector('.elements__card-image').setAttribute("src", card.link);
  return cardEl;
}

function renderCard(card, container) {
  container.append(card);
}

//Event Listeners
function closePopup() {
  popupEl.classList.remove('popup_open');
}

editInfoBtn.addEventListener('click', function(){
  popupEl.classList.add('popup_open');
  editFormNameInput.value = profileNameEl.textContent;
  editFormAbtInput.value = profileAbtEl.textContent;
});

closeBtnEl.addEventListener('click', function(){
  closePopup();
});

editFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
  closePopup();
});

initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, elementsList)
});
