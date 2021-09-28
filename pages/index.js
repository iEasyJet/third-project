// Находим секцию profile
let profile = document.querySelector('.profile');
// Находим кнопку редактирования
let editBtn = profile.querySelector('.profile__edit-btn');
// Находим popup
let popup = document.querySelector('.popup');
// Находим кнопку закрытия popup
let popupSkipBtn = document.querySelector('.popup__close');





  // Функция для копирования значения в value popup
function popupValue() {
    // Значение поля с имененем
  let profileName = document.querySelector('.profile__name-user').innerHTML;
    // Значение поля с работой
  let profileJob = document.querySelector('.profile__name-job').innerHTML;

    // Прописываем значения в value input
  popup.querySelector('.popup__input_type_name').value = profileName;
  popup.querySelector('.popup__input_type_job').value = profileJob;
  };


// Добавляем новый класс с display block для отображения popup
function openPopup() {
  popup.classList.add('popup_opened');
};

// Удаляем новый класс с display block для скрытия popup
function closePopup() {
  popup.classList.remove('popup_opened');
};

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_type_job');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Выберите элементы, куда должны быть вставлены значения полей
    let userName = profile.querySelector('.profile__name-user');
    let userJob = profile.querySelector('.profile__name-job');
    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);
//Ставим прослушку на кнопку редактирования, чтобы открыть popup
editBtn.addEventListener('click', openPopup);
// Прописываем новые значение value в input
popupValue()
//Ставим прослушку на кнопку закрытия popup
popupSkipBtn.addEventListener('click', closePopup);
