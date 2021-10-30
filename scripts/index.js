// Находим template
const template = document.querySelector('#card').content;
// Находим название карточки
const nameCard = template.querySelector('.card__title');
// Находим картинку карточки
const imgCard = template.querySelector('.card__img');

// Находим место добавления карточек в HTML
const cardsContainer = document.querySelector('.card');

// Находим секцию profile
const profile = document.querySelector('.profile');
// Находим кнопку редактирования
const editBtn = profile.querySelector('.profile__edit-btn');
// Значение поля с имененем profile
const profileName = profile.querySelector('.profile__name-user');
// Значение поля с работой profile
const profileJob = profile.querySelector('.profile__name-job');

// Находим popup
const popupEditProfile = document.querySelector('.popup_type_profile');
// Находим кнопку закрытия popup
const popupSkipBtn = popupEditProfile.querySelector('.popup__close');
// Находим форму popup
const formElementPopup = popupEditProfile.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElementPopup.querySelector('.popup__input_type_name');
const jobInput = formElementPopup.querySelector('.popup__input_type_job');
// Массив инпутов формы профиля
const popupProfileInputs = [nameInput, jobInput];
// Кнопка отправки формы
const popupProfileSubmit = formElementPopup.querySelector('.popup__btn');

// Находим кнопку добавления картинок для popup-img
const newCardBtn = profile.querySelector('.profile__btn');
// Находим popup-img
const popupImg = document.querySelector('.popup_type_card');
// Находим кнопку закрытия popup-img
const popupSkipBtnImg = popupImg.querySelector('.popup__close');
// Находим форму в DOM popup-img
const formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
const nameImgInput = formElementImg.querySelector(
  '.popup__input_type_name-img'
);
const linkImgInput = formElementImg.querySelector(
  '.popup__input_type_link-img'
);
// Массив инпутов формы создания карточки
const imgInputs = [nameImgInput, linkImgInput];
// Кнопка отправки формы для создания карточки
const popupImgSubmit = formElementImg.querySelector('.popup__btn');

// Находим popup-pic
const popupPic = document.querySelector('.popup_type_pic');
// Находим закрытие popup-pic
const popupPicClose = popupPic.querySelector('.popup__close');
// Находим popup-pic__title
const popupPicTitle = popupPic.querySelector('.popup__pic-title');
// Находим popup-pic__expand
const popupPicExpand = popupPic.querySelector('.popup__pic-expand');

// Функция закрытия попапов по клавише ESC
function handleESC(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Добавляем новый класс для отображения/закрытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleESC);
}

// Удаляем новый класс  для скрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleESC);
}

// Функция добавления готовой карточки на страницу
// С параметрами: место добавления и заготовки карточки
function addCard(placeOfAdd, template) {
  placeOfAdd.prepend(template);
}

// Функция создания содержимого карточки
function createCard(titleCard, linkImg, template) {
  // Проставялем соответсвующее название, картинку и alt
  template.querySelector('.card__title').textContent = titleCard;
  template.querySelector('.card__img').src = linkImg;
  template.querySelector('.card__img').alt = titleCard;

  // Функция развертывания картинки popup-pic
  function openPopupPic() {
    openPopup(popupPic);
    popupPicTitle.textContent =
      template.querySelector('.card__title').textContent;
    popupPicExpand.src = template.querySelector('.card__img').src;
  }

  // Открытие картинки
  template.querySelector('.card__img').addEventListener('click', openPopupPic);

  // Функция удаления карточки
  function deleteCard() {
    template.remove();
  }

  // Удаление карточки
  template.querySelector('.card__delete').addEventListener('click', deleteCard);

  // Находим лайк на карточке
  const cardLike = template.querySelector('.card__like');

  // Функция проставления/удаления лайка
  function addLike() {
    cardLike.classList.toggle('card__like_active');
  }

  // Проставление/удаление лайка
  cardLike.addEventListener('click', addLike);
}

// Добавляем массив карточек на страницу
initialCards.forEach(function (item) {
  // Копируем содержимое заготовки
  const cardItem = template.querySelector('.card__item').cloneNode(true);

  // Создаем содержимое карточки
  createCard(item.name, item.link, cardItem);

  // Добавляем карточки на страницу
  addCard(cardsContainer, cardItem);
});

// Функция для копирования значения в value popup
function openPopupEditProfile() {
  // Прописываем значения в value input
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
  // Пришлось добавить данную функцию то же и для формы профиля
  // Тк изначально, если ее нет, то кнопка заблокирована
  // Хотя поля 'имя' и 'место работы' заполнены
  toggleButtonState(popupProfileInputs, popupProfileSubmit);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleNewUserName(evt) {
  evt.preventDefault();

  // Вставляем новые значения в разметку
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Функция клонирования значения формы popup-img с функцией удаления, просмотра фото и лайка
function handleNewCard(evt) {
  // Не даем перезагружаться странице
  evt.preventDefault();

  // Копируем содержимое заготовки
  const cardItem = template.querySelector('.card__item').cloneNode(true);

  // Создание содержимого карточки
  createCard(nameImgInput.value, linkImgInput.value, cardItem);

  // Добавляем карточки на страницу
  addCard(cardsContainer, cardItem);

  // Закрываем форму после создания карточки
  closePopup(popupImg);

  // Очищаем поля формы
  nameImgInput.value = '';
  linkImgInput.value = '';
}

// Функция закрытия попапа по оверлею
function closeOnOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}

// Открытие popup-img
newCardBtn.addEventListener('click', function () {
  openPopup(popupImg);
  toggleButtonState(imgInputs, popupImgSubmit);
});

// Закрытие popup-img
popupSkipBtnImg.addEventListener('click', () => closePopup(popupImg));

// Прикрепляем обработчик к форме:
formElementPopup.addEventListener('submit', handleNewUserName);

// Открытие popup
editBtn.addEventListener('click', openPopupEditProfile);

// Закрытие popup
popupSkipBtn.addEventListener('click', () => closePopup(popupEditProfile));

// Добавление новых карточек
formElementImg.addEventListener('submit', handleNewCard);

// Закрытие большой картинки
popupPicClose.addEventListener('click', () => closePopup(popupPic));

// Закрытие попапов по оверлею
popupEditProfile.addEventListener('click', closeOnOverlay);
popupImg.addEventListener('click', closeOnOverlay);
popupPic.addEventListener('click', closeOnOverlay);
