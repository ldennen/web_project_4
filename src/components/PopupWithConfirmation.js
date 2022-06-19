import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._popupElement.querySelector('.confirm-form');
  }

  open(evt, card) {
    super.open();
    this._card = card;
    this._deletedCard = evt.target.closest('.elements__card')
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._card, this._deletedCard);
    })
  }
}

export default PopupWithConfirmation;
