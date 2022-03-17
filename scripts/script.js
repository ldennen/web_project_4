const editFormEl = document.querySelector('.edit-form');
const editFormNameInput = document.querySelector('.edit-form__input_name');
const editFormAbtInput = document.querySelector('.edit-form__input_about-me');
const editInfoBtn = document.querySelector('.button_info');
const closeBtnEl = document.querySelector('.button_close')
const popupEl = document.querySelector('.popup');
const profileNameEl = document.querySelector('.profile__info-name');
const profileAbtEl = document.querySelector('.profile__info-about-me');

function closePopup() {
  popupEl.classList.remove('popup_open');
}

editInfoBtn.addEventListener('click', function(){
  popupEl.classList.add('popup_open');
});

closeBtnEl.addEventListener('click', function(){
  closePopup();
});

editFormNameInput.value = profileNameEl.textContent;
editFormAbtInput.value = profileAbtEl.textContent;

editFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileAbtEl.textContent = editFormAbtInput.value;
  closePopup();
});


