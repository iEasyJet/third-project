export class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._closePopup = this._selectorPopup.querySelector('.popup__close');
  }

  // Метод открытия попапа
  open() {
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._selectorPopup.addEventListener('click', this._closeOnOverlay);
  }

  // Метод закрытия попапа
  close() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._selectorPopup.removeEventListener('click', this._closeOnOverlay);
  }

  // Метод закрытия попапа по ESC
  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  // Метод закрытия попапа по оверлею
  _closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    }
  };

  // Комплект слушателей
  setEventListeners() {
    this._closePopup.addEventListener('click', () => {
      this.close();
    });
  }
}
