import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgTitle = document.querySelector('.popup__title');
    this._popupImg = document.querySelector('.popup__preview-image');
  }

  open({ link, name }) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupImgTitle.textContent = name;
    super.open();
  }
}

export default PopupWithImage;