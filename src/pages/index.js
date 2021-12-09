import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-сards.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  editBtn,
  newCardBtn,
  popupEditProfile,
  formElementPopup,
  popupImg,
  formElementImg,
  profileSettings,
  validationConfig,
  newSection,
  newProfileValue,
  popupPic
} from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

// Функция открытия большой картинки
const popupWithImage = new PopupWithImage(popupPic);
export function handleCardClick(name, src) {
  popupWithImage.open(name, src);
  popupWithImage.setEventListeners();
}

// Данные профиля
const userInfo = new UserInfo(profileSettings);
const profilePopup = new PopupWithForm(popupEditProfile, {
  submitEvent: (formValues) => {
    const {name: userName, job: userJob} = formValues;
    userInfo.setUserInfo(userName, userJob);
    profilePopup.close();
  },
});

// Слушатели на закрытие и сабмит формы профиля
profilePopup.setEventListeners();

// Слушатель на открытие профиля
editBtn.addEventListener('click', () => {
  profilePopup.open();
  newProfileValue(userInfo.getUserInfo());
  profileEditFormValidation.resetValidation();
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

// Добавляем массив карточек на страницу
newSection(initialCards);

// Добавление новых карточек
const shapeOfNewCards = new PopupWithForm(popupImg, {
  submitEvent: (formValues) => {
    // Вкладываем объект formValues в массив newCard
    const newCard = [{name: formValues.nameImg, link: formValues.linkImg}]
    newSection(newCard);
  },
});

// Добавление слушателей на закрытие
shapeOfNewCards.setEventListeners();

// Слушатель на открытие попапа новых карточек
newCardBtn.addEventListener('click', () => {
  shapeOfNewCards.open();
  newCardFormValidation.resetValidation();
});
