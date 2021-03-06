import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationSettings,
  initialCards,
  editFormEl,
  addFormEl,
  profileNameEl,
  profileAbtEl,
  editFormNameInput,
  editFormAbtInput,
  editInfoBtn,
  addImgBtn
} from "../utils/constants.js";

//Form Validation
const editFormValidator = new FormValidator(validationSettings, editFormEl);
const addFormValidator = new FormValidator(validationSettings, addFormEl);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Profile functions
const editUserInfoForm = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: submitFormValues,
});
editUserInfoForm.setEventListeners();

function openEditForm() {
  fillFormValues();
  editFormValidator.resetValidation();
  editUserInfoForm.open();
}

function fillFormValues() {
  editFormNameInput.value = profileNameEl.textContent;
  editFormAbtInput.value = profileAbtEl.textContent;
}

function submitFormValues() {
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
}

//User Info
const user = new UserInfo({
  userNameSelector: '.profile__info-name',
  userInfoSelector: '.profile__info-about-me'
});

//New Image Functions
const addImageForm = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (data) => {
    renderCards(data);
  }
});
addImageForm.setEventListeners();

function openImageForm() {
  addFormEl.reset();
  addFormValidator.resetValidation();
  addImageForm.open();
}

//Render Cards
const previewImgPopup = new PopupWithImage('.popup_type_preview');
previewImgPopup.setEventListeners();

function renderCards(data) {
  const newCardElement = {
    data,
    handleCardClick: () => {
      previewImgPopup.open(data);
    },
    cardSelector: '#card-template'
  };
  const card = new Card(newCardElement);
  const cardElement = card.getView();
  cardList.addItem(cardElement);
  return card;
}

//Inital Cards
const cardList = new Section({
    items: initialCards,
    renderer: renderCards,
    containerSelector: '.elements__container',
  });
cardList.renderItems();

//Event Listeners (Open Forms)
editInfoBtn.addEventListener('click', openEditForm);
addImgBtn.addEventListener('click', openImageForm);