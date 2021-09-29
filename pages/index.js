// Находим секцию profile
let profile = document.querySelector('.profile');
// Находим кнопку редактирования
let editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
let profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
let profileJob = profile.querySelector('.profile__name-job');

// Находим popup
let popup = document.querySelector('.popup');
// Находим кнопку закрытия popup
let popupSkipBtn = popup.querySelector('.popup__close');
// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');



// Добавляем новый класс с display block для отображения popup
function openPopup() {
  popup.classList.add('popup_opened');
};

// Удаляем новый класс с display block для скрытия popup
function closePopup() {
  popup.classList.remove('popup_opened');
};

// Функция для копирования значения в value popup
function popupValue() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup()
  };

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Вставьте новые значения в разметку
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup()
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//Ставим прослушку на кнопку редактирования, чтобы открыть popup
editBtn.addEventListener('click', popupValue);

//Ставим прослушку на кнопку закрытия popup
popupSkipBtn.addEventListener('click', closePopup);
