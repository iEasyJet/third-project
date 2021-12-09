import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._title = this._selectorPopup.querySelector('.popup__pic-title');
    this._expand = this._selectorPopup.querySelector('.popup__pic-expand');
  }
  open(name, link) {
    super.open();
    this._title.textContent = name;
    this._expand.src = link;
    this._expand.alt = name;
  }
}
