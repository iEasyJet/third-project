const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];



// Находим template
let template = document.querySelector('#card').content;
// Находим название карточки
let nameCard = template.querySelector('.card__title');
// Находим картинку карточки
let imgCard = template.querySelector('.card__img');



// Находим место добавления карточек в HTML
let card = document.querySelector('.card');



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



// Находим кнопку добавления картинок для popup-img
let profileBtn = profile.querySelector('.profile__btn');
// Находим popup-img
let popupImg = document.querySelector('.popup-img');
// Находим кнопку закрытия popup-img
let popupSkipBtnImg = popupImg.querySelector('.popup__close');
// Находим форму в DOM popup-img
let formElementImg = popupImg.querySelector('.popup__form');
// Находим поля формы в DOM popup-img
let nameImgInput = formElementImg.querySelector('.popup__input_type_name-img');
let linkImgInput = formElementImg.querySelector('.popup__input_type_link-img');



// Находим popup-pic
let popupPic = document.querySelector('.popup-pic');
// Находим закрытие popup-pic
let popupPicClose = popupPic.querySelector('.popup-pic__close');
// Находим картинку карточек и делаем массив
let imgInCard = Array.from(document.querySelectorAll('.card__img'));
// Находим popup-pic__title
let popupPicTitle = popupPic.querySelector('.popup-pic__title');
// Находим popup-pic__expand
let popupPicExpand = popupPic.querySelector('.popup-pic__expand');



// Добавляем массив карточек на страницу
initialCards.forEach(function(item) {
  const cardItem = template.querySelector('.card__item').cloneNode(true);
  cardItem.querySelector('.card__title').textContent = item.name;
  cardItem.querySelector('.card__img').src = item.link;
  cardItem.querySelector('.card__img').alt = item.name;

  // Функция развертывания картинки popup-pic
  function openPopupPic() {
    popupPic.classList.add('popup-pic_opened');
    popupPicTitle.textContent = cardItem.querySelector('.card__title').textContent;
    popupPicExpand.src = cardItem.querySelector('.card__img').src;
  };
  // Функция закрытия popup-pic
  function closePopupPic() {
    popupPic.classList.remove('popup-pic_opened');
  };
  // Открытие картинки
  cardItem.querySelector('.card__img').addEventListener('click', openPopupPic)
  // Закрытие картинки
  popupPicClose.addEventListener('click', closePopupPic);



  // Находим лайк на карточке
  let cardLike = cardItem.querySelector('.card__like');
  // Добавление/удаление модификатора лайка
  function addLike() {
    cardLike.classList.toggle('card__like_active');
  };

  function deleteCard() {
    cardItem.remove();
  };

  cardItem.querySelector('.card__delete').addEventListener('click', deleteCard);
  cardLike.addEventListener('click', addLike);

  card.prepend(cardItem);
});




// Добавляем новый класс с display block для отображения popup-img
function openPopupImg() {
  popupImg.classList.add('popup_opened');

  nameImgInput.value = '';
  linkImgInput.value = '';
};
// Удаляем новый класс с display block для скрытия popup-img
function closePopupImg() {
  popupImg.classList.remove('popup_opened');
};



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
    closePopup();
};


// Функция клонирования значения формы popup-img с функцией удаления, просмотра фото и лайка
function formSubmit (evt) {
  evt.preventDefault();

    const cardItem = template.querySelector('.card__item').cloneNode(true);
    cardItem.querySelector('.card__title').textContent = nameImgInput.value;
    cardItem.querySelector('.card__img').src = linkImgInput.value;
    cardItem.querySelector('.card__img').alt = nameImgInput.value;

    let cardLike = cardItem.querySelector('.card__like');

    // Функция развертывания картинки popup-pic
    function openPopupPic() {
      popupPic.classList.add('popup-pic_opened');
      popupPicTitle.textContent = cardItem.querySelector('.card__title').textContent;
      popupPicExpand.src = cardItem.querySelector('.card__img').src;
    };
    // Функция закрытия popup-pic
    function closePopupPic() {
      popupPic.classList.remove('popup-pic_opened');
    };
    // Открытие картинки
    cardItem.querySelector('.card__img').addEventListener('click', openPopupPic)
    // Закрытие картинки
    popupPicClose.addEventListener('click', closePopupPic);


    function addLike() {
      cardLike.classList.toggle('card__like_active');
    }

    cardLike.addEventListener('click', addLike);

    function deleteCard() {
      cardItem.remove();
    };

    cardItem.querySelector('.card__delete').addEventListener('click', deleteCard);

    card.prepend(cardItem);

    closePopupImg();
};



// Открытие popup-img
profileBtn.addEventListener('click', openPopupImg);

// Закрытие popup-img
popupSkipBtnImg.addEventListener('click', closePopupImg);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Открытие popup
editBtn.addEventListener('click', popupValue);

// Закрытие popup
popupSkipBtn.addEventListener('click', closePopup);

// Добавление новых карточек
formElementImg.addEventListener('submit', formSubmit);
