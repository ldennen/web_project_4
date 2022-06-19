class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
    this._handleOverlayClickClose
     = this._handleOverlayClickClose
    .bind(this);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.close();
    };
  }

  _handleOverlayClickClose(evt) {
    if(evt.target.classList.contains('popup_open')){
      this.close();
    }
  }

  setEventListeners() {
    const popupCloseBtn = this._popupElement.querySelector('.button_location_close');
    popupCloseBtn.addEventListener('click', () => this.close());
  }

  open() {
    this._popupElement.classList.add('popup_open');
    document.addEventListener('keyup', this._handleEscUp);
    document.addEventListener('click', this._handleOverlayClickClose
    );
  }

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener('keyup', this._handleEscUp);
    document.removeEventListener('click', this._handleOverlayClickClose
    );
  }
}

export default Popup;
