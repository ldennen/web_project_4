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
const addPopup = document.querySelector('.popup_type_add');
const editFormEl = document.querySelector('.edit-form');
const addFormEl = addPopup.querySelector('.edit-form');

//Buttons
const editInfoBtn = document.querySelector('.button_location_info');
const addImgBtn = document.querySelector('.button_location_add-photo');

//Inputs
const editFormNameInput = document.querySelector('.edit-form__input_location_name');
const editFormAbtInput = document.querySelector('.edit-form__input_location_about-me');

//Validation 

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

export {
  initialCards,
  validationSettings,
  editFormEl,
  addFormEl,
  profileNameEl,
  profileAbtEl,
  editFormNameInput,
  editFormAbtInput,
  editInfoBtn,
  addImgBtn
}