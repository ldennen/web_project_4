class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._imageElement.addEventListener('click', this._handleCardClick);
  }

  _handleLikeIcon(evt) {
    evt.target.classList.toggle('button_location_like-active');
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.elements__card').remove();
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
    return cardElement;
  }

  //Generate Card
  getView() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.elements__card-image');
    imageElement.alt = this._name;
    imageElement.src = this._link;
    const cardTitle = this._element.querySelector('.elements__card-title');
    cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

}

export default Card;