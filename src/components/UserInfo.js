export class UserInfo {
  constructor(objectSettings) {
    this._nameProfile = document.querySelector(objectSettings.nameProfile);
    this._jobProfile = document.querySelector(objectSettings.jobProfile);
  }

  // Возвращает объект с данными пользователя
  getUserInfo() {
    this._userData = {
      name: this._nameProfile.textContent,
      job: this._jobProfile.textContent,
    };

    return this._userData;
  }

  // Проставляет данные в разметку
  setUserInfo(userName, userJob) {
    this._nameProfile.textContent = userName;
    this._jobProfile.textContent = userJob;
  }
}
