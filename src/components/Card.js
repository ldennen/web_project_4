class Card {
  constructor({ data, cardSelector, handleCardClick, handleLikeClick, handleDeleteConfim }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteConfirm = handleDeleteConfim;
    this._ownerId = data.owner;
    this._userId = data.userId;
    this._cardId = data._id;
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', this._handleCardClick);
    this._likeBtn.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    if (this._deleteBtn) {
      this._deleteBtn.addEventListener('click', () => {
        this._handleDeleteConfirm(this);
      })
    }
  }

  _handleLikes(result) {
    this._likeBtn.classList.toggle('button_location_like-active');
    this._likeCounter.textContent = result.likes.length;
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.elements__card').remove();
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
    return cardElement;
  }

  isLiked() {
    return this._likeBtn.classList.contains('.button_location_like-active')
  }

  getCardId() {
    return this._cardId;
  }

  //Generate Card
  getView() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.elements__card-image');
    this._imageElement.alt = this._name;
    this._imageElement.src = this._link;
    this._likeBtn = this._element.querySelector('.button_location_like');
    this._likeCounter = this._element.querySelector('.button_location_like-counter');
    this._likeCounter.textContent = this._likes.length;
    this._deleteBtn = this._element.querySelector('.button_location_trash');
    if (this._ownerId !== this._userId) {
      this._deleteBtn.remove();
    }
    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeBtn.classList.add('.button_location_like-active')
    }
    const cardTitle = this._element.querySelector('.elements__card-title');
    cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

}

export default Card;