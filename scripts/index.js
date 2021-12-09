import { Card } from './Card.js';
import { validationConfig, FormValidator } from './FormValidator.js';
import { initialCards } from './initial-сards.js';

// Находим секцию profile
const profile = document.querySelector('.profile');
// Находим кнопку редактирования
const editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
const profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
const profileJob = profile.querySelector('.profile__name-job');
// Находим кнопку добавления картинок для popup-img
const newCardBtn = profile.querySelector('.profile__btn');

// Находим popup
const popupEditProfile = document.querySelector('.popup_type_profile');
// Находим форму popup
const formElementPopup = popupEditProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElementPopup.querySelector('.popup__input_type_name');
const jobInput = formElementPopup.querySelector('.popup__input_type_job');

// Находим popup-img
const popupImg = document.querySelector('.popup_type_card');
// Находим форму в DOM popup-img
const formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
const nameImgInput = formElementImg.querySelector(
  '.popup__input_type_name-img'
);
const linkImgInput = formElementImg.querySelector(
  '.popup__input_type_link-img'
);

// Находим popup-pic
const popupPic = document.querySelector('.popup_type_pic');
// Находим popup-pic__title
const popupPicTitle = popupPic.querySelector('.popup__pic-title');
// Находим popup-pic__expand
const popupPicExpand = popupPic.querySelector('.popup__pic-expand');

// Место добавления карточек
const cardsContainer = document.querySelector('.card');

// Все попапы
const allPopups = document.querySelectorAll('.popup');

// Функция закрытия попапов по клавише ESC
function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Функция закрытия попапа по оверлею
function closeOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}

// Функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleESC);
  popup.addEventListener('click', closeOnOverlay);
}

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleESC);
  popup.removeEventListener('click', closeOnOverlay);
}

// Функция для копирования значения в value popup
function openPopupEditProfile() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
}

formElementPopup.addEventListener('submit', handleNewUserName);

// Обработчик «отправки» формы
function handleNewUserName(evt) {
  evt.preventDefault();

  // Вставляем новые значения в разметку
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Функция открытия большой картинки карточки
const handleCardClick = (name, link) => {
  openPopup(popupPic);
  popupPicTitle.textContent = name;
  popupPicExpand.src = link;
};

// Объект настроеек для создания карточки
const settingsObject = {
  template: '#card',
  like: '.card__like',
  delete: '.card__delete',
  img: '.card__img',
  title: '.card__title',
  handleCard: handleCardClick,
};

// Функция создания карточки
function createCard(name, link, settingsObject) {
  const card = new Card(name, link, settingsObject);
  const cardElement = card.generateCard();
  return cardElement;
}

// Функция добавления карточки на страницу
function addCard(item) {
  cardsContainer.prepend(item);
}

// Добавляем массив карточек
initialCards.forEach(function (item) {
  addCard(createCard(item.name, item.link, settingsObject));
});

// Добавление новых карточек
formElementImg.addEventListener('submit', () => {
  addCard(createCard(nameImgInput.value, linkImgInput.value, settingsObject));

  // Закрываем форму после создания карточки
  closePopup(popupImg);

  // Очищаем поля формы
  nameImgInput.value = '';
  linkImgInput.value = '';
});

// Включаем валидацию на форму редактирования профиля
const profileEditFormValidation = new FormValidator(
  validationConfig,
  formElementPopup
);
profileEditFormValidation.enableValidation();

// Включаем валидацию на форму добавления новых карточек
const newCardFormValidation = new FormValidator(
  validationConfig,
  formElementImg
);
newCardFormValidation.enableValidation();

// Открытие формы профиля
editBtn.addEventListener('click', () => {
  openPopupEditProfile();
  profileEditFormValidation.resetValidation();
});

// Открытие формы новой карточки
newCardBtn.addEventListener('click', () => {
  openPopup(popupImg);
  newCardFormValidation.resetValidation();
});

// Проставляем всем попапам слушателей на закрытие
allPopups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});
