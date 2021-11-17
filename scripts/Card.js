class Card {
  constructor(name, link, settingsObject) {
    this._title = name;
    this._linkImg = link;
    this._template = settingsObject.template;
    this._like = settingsObject.like;
    this._delete = settingsObject.delete;
    this._img = settingsObject.img;
    this._titleCard = settingsObject.title;
    this._handleCardClick = settingsObject.handleCard;
  }

  // Метод клонирования template-заготовки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector('.card__item')
      .cloneNode(true);

    return cardElement;
  }

  // Метод проставления/удаления лайка
  _addLike() {
    this._elementLike.classList.toggle('card__like_active');
  }

  // Метод удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  // Метод всех слушателей
  _setEventListeners() {
    // Слушатель на лайк
    this._elementLike.addEventListener('click', () => {
      this._addLike();
    });

    // Слушатель на удаление
    this._elementDelete.addEventListener('click', () => {
      this._deleteCard();
    });

    this._elementImg.addEventListener('click', () => {
      this._handleCardClick(this._title, this._linkImg);
    });
  }

  // Метод генерации карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector(this._like);
    this._elementDelete = this._element.querySelector(this._delete);
    this._elementImg = this._element.querySelector(this._img);
    this._elementTitle = this._element.querySelector(this._titleCard);

    this._setEventListeners();

    this._elementImg.src = this._linkImg;
    this._elementImg.alt = this._linkImg;
    this._elementTitle.textContent = this._title;

    return this._element;
  }
}

export { Card };
