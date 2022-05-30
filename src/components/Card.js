import { openPopup } from '../utils/utils.js';
import { previewImgEl, imgPopupTitle, previewImgPopup} from '../../src/pages/index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector('.button_location_like').addEventListener('click', (evt) => {
        this._handleLikeIcon(evt);
      });
    this._element
      .querySelector('.button_location_trash').addEventListener('click', (evt) => {
        this._handleDeleteCard(evt);
      });
    this._element
      .querySelector('.elements__card-image').addEventListener('click', () => {
        this._handlePreviewPicture();
      });
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle('button_location_like-active');
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.elements__card').remove();
  }

  _handlePreviewPicture() {
    previewImgEl.src = this._link;
    previewImgEl.alt = this._name;
    imgPopupTitle.textContent = this._name;
    openPopup(previewImgPopup);
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
    return cardElement;
  }

  //Generate Card
  getView() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector('.elements__card-image');
    imageElement.alt = this._name;
    imageElement.src = this._link;
    const cardTitle = this._element.querySelector('.elements__card-title');
    cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

}

export default Card;