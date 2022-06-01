class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    return {
      userNameInput: this._userName.textContent,
      userInfoInput: this._userInfo.textContent
    };
  }

  setUserInfo({ userNameInput, userInfoInput }) {
    this._profileName.textContent = userNameInput;
    this._profileInfo.textContent = userInfoInput;
  }
}

export default UserInfo;