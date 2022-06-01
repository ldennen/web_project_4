class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.close();
    };
  }

  setEventListeners() {
    const popupCloseBtn = this._popupElement.querySelector('.button_location_close');
    const popupOpen = this._popupElement.querySelector('.popup_open');
    popupCloseBtn.addEventListener('click', () => this.close());
    popupOpen.addEventListener('click', () => this.close());
  }

  open() {
    this._popupElement.classList.add('popup_open');
    document.addEventListener('keyup', this._handleEscUp);
  }

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener('keyup', this._handleEscUp);
  }
}

export default Popup;
