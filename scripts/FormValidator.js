// Объект настроеек
const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};

class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    this._button = this._form.querySelector(
      this._validationConfig.submitButtonSelector
    );
    this._inputs = Array.from(
      this._form.querySelectorAll(this._validationConfig.inputSelector)
    );
  }

  // Ресет ошибок инпутов
  resetValidation() {
    this.toggleButtonState();

    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  // Метод активации ошибки ввода
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  // Метод деактивации ошибки ввода
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Метод смены активации/деактивации кнопки
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._validationConfig.inactiveButtonClass);
      this._button.setAttribute('disabled', 'disabled');
    } else {
      this._button.classList.remove(this._validationConfig.inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }

  // Метод проверяет валидность формы
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Метод добавления слушателя события всем элементам формы
  _setEventListeners = () => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from

    this.toggleButtonState();
    // Обойдём все элементы полученной коллекции
    this._inputs.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  // Метод добавления обработчиков всем формам
  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export { validationConfig, FormValidator };
