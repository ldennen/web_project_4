import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgTitle = document.querySelector('.popup__title');
    this._popupImg = document.querySelector('.popup__preview-image');
  }

  open(data) {
    this._popupImg.src = data.link;
    this._popupImg.alt = data.name;
    this._popupImgTitle.textContent = data.name;
    super.open();
  }
}

export default PopupWithImage;