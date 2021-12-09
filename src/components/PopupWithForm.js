import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, { submitEvent }) {
    super(selectorPopup);
    this._callBack = submitEvent;
    this._form = this._selectorPopup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');
    const formValues = {};

    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      this._callBack(this._getInputValues());
      this.close();
    });
  }
}
