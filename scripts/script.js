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
const previewImgPopup = document.querySelector('.popup_type_preview');
const editFormEl = document.querySelector('.edit-form');
const addFormEl = addPopup.querySelector('.edit-form');
const elementsList = document.querySelector('.elements__container');
const previewImgEl = document.querySelector('.popup__preview-image');

//Buttons
const editInfoBtn = document.querySelector('.button_location_info');
const editPopupCloseBtn = editPopup.querySelector('.button_location_close');
const addPopupCloseBtn = addPopup.querySelector('.button_location_close');
const previewImgCloseBtn = previewImgPopup.querySelector('.button_location_close');
const addImgBtn = document.querySelector('.button_location_add-photo');

//Inputs
const editFormNameInput = document.querySelector('.edit-form__input_location_name');
const editFormAbtInput = document.querySelector('.edit-form__input_location_about-me');
const addFormTitleInput = document.querySelector('.edit-form__input_type_title');
const addFormLinkInput = document.querySelector('.edit-form__input_type_link');

//Templates
const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.elements__card');

//Like button toggle
function likeBtnActive(event) {
  event.classList.toggle('button_location_like-active');
};

//Add new card
function renderNewCard(card) {
  elementsList.prepend(generateCard(card));
}

//Delete card
function deleteImg(event) {
  event.target.closest(".elements__card").remove();
}

//Generate card
function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  cardEl.querySelector('.elements__card-title').textContent = card.name;
  
  const imageEl = cardEl.querySelector('.elements__card-image');
  imageEl.alt = card.name;
  imageEl.src = card.link;
  imageEl.addEventListener('click', function() {
    previewImgEl.src = card.link;
    togglePopup(previewImgPopup);
  });

  const likeBtn = cardEl.querySelector('.button_location_like');
  likeBtn.addEventListener('click', (event) => {
    const likeBtn = event.target;
    likeBtnActive(likeBtn);
  });

  const deleteBtn = cardEl.querySelector('.button_location_trash');
  deleteBtn.addEventListener('click', deleteImg);
  return cardEl;
}

//Render cards list
function renderCard(card, container) {
  container.append(card);
}

//Toggle popups
function togglePopup(popup) {
  popup.classList.toggle('popup_open');
}

//Event Listeners
editInfoBtn.addEventListener('click', () => togglePopup(editPopup));
editPopupCloseBtn.addEventListener('click', () => togglePopup(editPopup));
addImgBtn.addEventListener('click', () => togglePopup(addPopup));
addPopupCloseBtn.addEventListener('click', () => togglePopup(addPopup));
previewImgCloseBtn.addEventListener('click', () => togglePopup(previewImgPopup));

//Forms
editFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
  togglePopup(editPopup);
});

addFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const card = {};
  card.name = addFormTitleInput.value;
  card.link = addFormLinkInput.value;
  renderNewCard(card);
  togglePopup(addPopup);
});

//Generate and add cards
initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, elementsList);
});
