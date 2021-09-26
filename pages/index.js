// Находим секцию profile
let profile = document.querySelector('.profile');
// Находим кнопку редактирования
let editBtn = profile.querySelector('.profile__edit-btn');
// Находим popup
let popup = document.querySelector('.popup');
// Находим кнопку закрытия popup
let popupSkipBtn = document.querySelector('.popup__img');

// Добавляем новый класс с display block для отображения popup
function popupOpenned() {
  popup.classList.add('popup_opened');
};

// Удаляем новый класс с display block для скрытия popup
function popupSkip() {
  popup.classList.remove('popup_opened');
};







// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input-name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input-job');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let userName = profile.querySelector('.profile__name-user');
    let userJob = profile.querySelector('.profile__name-job');
    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInputValue;
    userJob.textContent = jobInputValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupSkip);
//Ставим прослушку на кнопку редактирования, чтобы открыть popup
editBtn.addEventListener('click', popupOpenned);
//Ставим прослушку на кнопку закрытия popup
popupSkipBtn.addEventListener('click', popupSkip);
