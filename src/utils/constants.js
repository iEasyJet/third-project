import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { handleCardClick } from '../pages/index.js'

// Находим секцию profile
export const profile = document.querySelector('.profile');
// Находим кнопку редактирования
export const editBtn = profile.querySelector('.profile__edit-btn');
// Находим кнопку добавления картинок для popup-img
export const newCardBtn = profile.querySelector('.profile__btn');

// Находим popup
export const popupEditProfile = document.querySelector('.popup_type_profile');
// Находим форму popup
export const formElementPopup = popupEditProfile.querySelector('.popup__form');
export const nameInput = formElementPopup.querySelector(
  '.popup__input_type_name'
);
export const jobInput = formElementPopup.querySelector(
  '.popup__input_type_job'
);

// Находим popup-img
export const popupImg = document.querySelector('.popup_type_card');
// Находим форму в DOM popup-img
export const formElementImg = popupImg.querySelector('.popup__form');
// Находим popup-pic
export const popupPic = document.querySelector('.popup_type_pic');

// Контейнер карточек
export const cardListSelector = '.card';

// Объект настроек для профиля
export const profileSettings = {
  nameProfile: '.profile__name-user',
  jobProfile: '.profile__name-job',
};

// Объект настроеек для создания карточки
export const settingsObject = {
  template: '#card',
  like: '.card__like',
  delete: '.card__delete',
  img: '.card__img',
  title: '.card__title',
  function: handleCardClick,
};

// Объект настроеек для валидации
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error_active',
  errorClass: 'popup__input-error_active',
};

// Функция генерации новой карточки
export const createCard = (data, cardList) => {
  const card = new Card(data.name, data.link, settingsObject);

  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

/// Новая секция
export const newSection = (data) => {
  const cardList = new Section(
    {
      items: data,
      renderer: (data) => {
        createCard(data, cardList);
      },
    },
    cardListSelector
  );
  cardList.renderItems();
};

// Новые значения профиля
export const newProfileValue = (data) => {
  nameInput.value = data.name;
  jobInput.value = data.job;
};
